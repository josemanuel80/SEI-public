import express from 'express';

import { listGameFactories } from '../controllers/game-factory.js';

const gameFactoryRouter = express.Router();

gameFactoryRouter.get('/game-factory', listGameFactories);

export default gameFactoryRouter;
