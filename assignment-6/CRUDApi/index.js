const http = require('http');
const { routes } = require("../CRUDApi/routes/routes")

const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("The server is listening on port 8000")
})