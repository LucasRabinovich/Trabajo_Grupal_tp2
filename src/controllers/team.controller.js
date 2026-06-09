const teamRepository = require('../repositories/team.repository');

const teamController = {
    create: async (req, res) => {
        let statusCode = 201;
        let responseData = {};

        try {
            const newTeam = await teamRepository.create(req.body);
            responseData = {
                message: 'Equipo creado con exito',
                team: newTeam
            };
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al crear el equipo',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findAll: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const teams = await teamRepository.findAll();
            responseData = teams;
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener los equipos',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findById: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const team = await teamRepository.findById(req.params.id);

            if (!team) {
                statusCode = 404;
                responseData = { message: 'Equipo no encontrado' };
            } else {
                responseData = team;
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener el equipo',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    update: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const updatedTeam = await teamRepository.update(req.params.id, req.body);

            if (!updatedTeam) {
                statusCode = 404;
                responseData = { message: 'Equipo no encontrado' };
            } else {
                responseData = {
                    message: 'Equipo actualizado con exito',
                    team: updatedTeam
                };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al actualizar el equipo',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    delete: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const deletedTeam = await teamRepository.delete(req.params.id);

            if (!deletedTeam) {
                statusCode = 404;
                responseData = { message: 'Equipo no encontrado' };
            } else {
                responseData = { message: 'Equipo eliminado con exito' };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al eliminar el equipo',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    }
};

module.exports = teamController;