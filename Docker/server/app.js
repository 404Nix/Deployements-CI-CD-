import {createServer} from "http"

const server = createServer((req, res) => {
  res.end("Hello from Docker!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});