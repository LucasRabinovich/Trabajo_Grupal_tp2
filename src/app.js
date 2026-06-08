const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "API DataGol corriendo correctamente" });
});

module.exports = app;