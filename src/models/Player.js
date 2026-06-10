import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    posicion: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    }
});

export default mongoose.model('Player', playerSchema);