import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import musicRouter from './routes/music.js';

const HOST = '127.0.0.1';
const PORT = 5000;

const server = express();
server.use(bodyParser.json());
server.use(logger);
server.use(jsonResponse);
server.use(musicRouter);

// TODO:

// MVC
// Model (Modelos)
// Views (Vistas)
// Controllers (Controladores)

// Body parser
// Transmitir data cliente -> servidor utilizando URLs

const noEndpointHandler = (request, response, next) => {
  response.statusCode = 404;
  response.send({
    message: 'Error: endpoint not found.',
  });
};

server.get('*', noEndpointHandler);

server.listen(PORT, () => console.log(`Serving on port ${PORT} 🚀`));
