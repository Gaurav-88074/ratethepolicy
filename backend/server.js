const http = require('http');

const {} = require("./controller/UserController");

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));