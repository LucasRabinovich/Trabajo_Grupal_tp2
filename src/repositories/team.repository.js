import Team from '../models/Team.js';

const teamRepository = {
    create: async (teamData) => {
        return await Team.create(teamData);
    },

    findAll: async () => {
        return await Team.find();
    },

    findById: async (id) => {
        return await Team.findById(id);
    },

    update: async (id, teamData) => {
        return await Team.findByIdAndUpdate(
            id,
            teamData,
            { new: true }
        );
    },

    delete: async (id) => {
        return await Team.findByIdAndDelete(id);
    }
};

export default teamRepository;