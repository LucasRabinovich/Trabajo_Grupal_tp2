const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    entrenador: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);