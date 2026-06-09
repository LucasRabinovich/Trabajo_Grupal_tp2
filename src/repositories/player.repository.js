const Player = require('../models/Player');

const playerRepository = {
    create: async (playerData) => {
        return await Player.create(playerData);
    },

    findAll: async () => {
        return await Player.find().populate('teamId');
    },

    findById: async (id) => {
        return await Player.findById(id).populate('teamId');
    },

    update: async (id, playerData) => {
        return await Player.findByIdAndUpdate(
            id,
            playerData,
            { new: true }
        );
    },

    delete: async (id) => {
        return await Player.findByIdAndDelete(id);
    }
};

module.exports = playerRepository;