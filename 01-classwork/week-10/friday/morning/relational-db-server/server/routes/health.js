import express from 'express';

const healthRouter = express.Router();

healthRouter.get('/health', (request, response) => {
  return response.send('ok');
});

export default healthRouter;
