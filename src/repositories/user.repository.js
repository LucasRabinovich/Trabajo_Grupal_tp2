import User from '../models/User.js';

const userRepository = {
    findByEmail: async (email) => {
        const user = await User.findOne({ email });
        return user;
    },
    create: async (userData) => {
        const newUser = new User(userData);
        const savedUser = await newUser.save();
        return savedUser;
    }
};

export default userRepository;