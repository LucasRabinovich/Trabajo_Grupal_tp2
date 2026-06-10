import playerRepository from '../repositories/player.repository.js';

const playerController = {
    create: async (req, res) => {
        let statusCode = 201;
        let responseData = {};

        try {
            const newPlayer = await playerRepository.create(req.body);

            responseData = {
                message: 'Jugador creado con exito',
                player: newPlayer
            };
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al crear jugador',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findAll: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            responseData = await playerRepository.findAll();
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener jugadores',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    findById: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const player = await playerRepository.findById(req.params.id);

            if (!player) {
                statusCode = 404;
                responseData = {
                    message: 'Jugador no encontrado'
                };
            } else {
                responseData = player;
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al obtener jugador',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    update: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const updatedPlayer = await playerRepository.update(
                req.params.id,
                req.body
            );

            if (!updatedPlayer) {
                statusCode = 404;
                responseData = {
                    message: 'Jugador no encontrado'
                };
            } else {
                responseData = {
                    message: 'Jugador actualizado con exito',
                    player: updatedPlayer
                };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al actualizar jugador',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    },

    delete: async (req, res) => {
        let statusCode = 200;
        let responseData = {};

        try {
            const deletedPlayer = await playerRepository.delete(req.params.id);

            if (!deletedPlayer) {
                statusCode = 404;
                responseData = {
                    message: 'Jugador no encontrado'
                };
            } else {
                responseData = {
                    message: 'Jugador eliminado con exito'
                };
            }
        } catch (error) {
            statusCode = 500;
            responseData = {
                message: 'Error al eliminar jugador',
                error: error.message
            };
        }

        return res.status(statusCode).json(responseData);
    }
};

export default playerController;