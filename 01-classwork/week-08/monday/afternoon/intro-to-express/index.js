import express from 'express';
import bodyParser from 'body-parser';
// import http from 'http'
// const server =  http.createServer();
const app = express();

app.use(express.static('./public'));

app.use(bodyParser.json());

const handleGetOnRoot = (request, response) => {
  const { method, url, body } = request;

  response.statusCode = 200;

  response.send({
    message: `Recibi tu peticion,  ${body.class}`,
  });
};

app.get('/', handleGetOnRoot);

app.listen(4000, () => console.log('Server running 🚀'));
