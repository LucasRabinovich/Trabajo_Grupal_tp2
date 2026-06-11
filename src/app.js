import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };

import authRoutes from './routes/auth.routes.js';
import teamRoutes from './routes/team.routes.js';
import playerRoutes from './routes/player.routes.js';
import matchRoutes from './routes/match.routes.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);
app.use('/api/matches', matchRoutes);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'API DataGol corriendo correctamente'
  });
});

export default app;