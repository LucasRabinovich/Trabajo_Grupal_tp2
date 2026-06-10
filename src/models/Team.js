import mongoose from 'mongoose';

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
    capitan: {
        type: String,
        required: true
    }
});

export default mongoose.model('Team', teamSchema);