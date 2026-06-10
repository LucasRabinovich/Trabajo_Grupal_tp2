import matchRepository from '../repositories/match.repository.js';

const matchController = {
    create: async (req, res) => {
        let statusCode = 201;
        let responseData = {};

        try {
            const newMatch = await matchRepository.create(req.body);

            responseData = {
                message: 'Partido creado con exito',
                match: newMatch
            };
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al crear partido',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findAll: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            responseData = await matchRepository.findAll();
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener partidos',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findById: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const match = await matchRepository.findById(req.params.id);

            if (!match) {
                statusCode = 404;
                responseData = { message: 'Partido no encontrado' };
            } else {
                responseData = match;
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener partido',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    update: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const updatedMatch = await matchRepository.update(
                req.params.id,
                req.body
            );

            if (!updatedMatch) {
                statusCode = 404;
                responseData = { message: 'Partido no encontrado' };
            } else {
                responseData = {
                    message: 'Partido actualizado con exito',
                    match: updatedMatch
                };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al actualizar partido',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    delete: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const deletedMatch = await matchRepository.delete(req.params.id);

            if (!deletedMatch) {
                statusCode = 404;
                responseData = { message: 'Partido no encontrado' };
            } else {
                responseData = {
                    message: 'Partido eliminado con exito'
                };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al eliminar partido',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    }
};

export default matchController;