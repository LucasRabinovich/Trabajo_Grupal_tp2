import userRepository from '../repositories/user.repository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authController = {
    register: async (req, res) => {
        let statusCode = 201;
        let responseData = {};
        try {
            const { email, password, rol } = req.body;
            const existingUser = await userRepository.findByEmail(email);
            if (existingUser) {
                statusCode = 400;
                responseData = { message: "El usuario ya existe" };
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await userRepository.create({
                    email,
                    password: hashedPassword,
                    rol
                });
                responseData = { message: "Usuario registrado con exito", userId: newUser._id };
            }
        } catch (error) {
            statusCode = 500;
            responseData = { message: "Error en el servidor", error: error.message };
        }
        return res.status(statusCode).json(responseData);
    },

    login: async (req, res) => {
        let statusCode = 200;
        let responseData = {};
        try {
            const { email, password } = req.body;
            const user = await userRepository.findByEmail(email);
            if (!user) {
                statusCode = 400;
                responseData = { message: "Credenciales invalidas" };
            } else {
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    statusCode = 400;
                    responseData = { message: "Credenciales invalidas" };
                } else {
                    const token = jwt.sign(
                        { id: user._id, rol: user.rol },
                        process.env.JWT_SECRET,
                        { expiresIn: '2h' }
                    );
                    responseData = { message: "Login exitoso", token };
                }
            }
        } catch (error) {
            statusCode = 500;
            responseData = { message: "Error en el servidor", error: error.message };
        }
        return res.status(statusCode).json(responseData);
    }
};

export default authController;