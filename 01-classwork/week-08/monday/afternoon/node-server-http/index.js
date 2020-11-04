import http from 'http';

const server = http.createServer();

const requestHandler = (request, response) => {
  let body;

  request
    .on('data', (chunk) => {
      body = chunk.toString();
    })
    .on('end', () => {
      const { method, url } = request;
      console.log({ method, url });
      response.setHeader('Content-type', 'application/json');
      response.statusCode = 200;
      // response.end('Recibi tu peticion, enhorabuena');
      response.end(
        JSON.stringify({
          message: 'Recibi tu peticion, enhorabuena',
        }),
      );
    });
};
// element.addEventListener('eventName', )
server.on('request', requestHandler);

server.listen(4000, () => console.log('Server is running 📡'));
