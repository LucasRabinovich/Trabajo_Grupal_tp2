const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const teamRoutes = require('./routes/team.routes');
const playerRoutes = require('./routes/player.routes');
const matchRoutes = require('./routes/match.routes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "API DataGol corriendo correctamente" });
});

module.exports = app;