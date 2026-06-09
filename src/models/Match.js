const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    localTeamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    awayTeamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    golesLocal: {
        type: Number,
        required: true
    },
    golesVisitante: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Match', matchSchema);