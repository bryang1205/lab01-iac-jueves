const http = require("http");

const hostname = "0.0.0.0";
const port = 3001;

const server = http
.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hola mundo! Un saludo");
});

server.listen(port, hostname, () => {
  console.log(`Bienvenido http://${hostname}:${port}/`);
});