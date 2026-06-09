const Match = require('../models/Match');

const matchRepository = {
    create: async (matchData) => {
        return await Match.create(matchData);
    },

    findAll: async () => {
        return await Match.find()
            .populate('localTeamId')
            .populate('awayTeamId');
    },

    findById: async (id) => {
        return await Match.findById(id)
            .populate('localTeamId')
            .populate('awayTeamId');
    },

    update: async (id, matchData) => {
        return await Match.findByIdAndUpdate(
            id,
            matchData,
            { new: true }
        );
    },

    delete: async (id) => {
        return await Match.findByIdAndDelete(id);
    }
};

module.exports = matchRepository;