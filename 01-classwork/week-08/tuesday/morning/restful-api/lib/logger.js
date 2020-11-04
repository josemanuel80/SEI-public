const logger = (request, response, next) => {
  const { url, method, body } = request;
  const { statusCode } = response;

  console.log(
    `Request from ${url} with method ${method} containing ${JSON.stringify(
      body,
    )}`,
  );
  console.log(`Response with status ${statusCode}`);
  next();
};

export default logger;
