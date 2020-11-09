import express from 'express';
import { listGames } from '../controllers/game.js';

const gamesRouter = express.Router();

gamesRouter.get('/game', listGames);

export default gamesRouter;
