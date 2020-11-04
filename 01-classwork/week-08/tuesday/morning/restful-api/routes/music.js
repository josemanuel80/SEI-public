import express from 'express';
import { listMusic, getMusicById } from '../controllers/music.js';

const musicRouter = express.Router();

// CRUD

// READ

// List all music resources
musicRouter.get('/music', listMusic);
// List a music resource
musicRouter.get('/music/:id', getMusicById);

export default musicRouter;
