const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const PORT = 3001;

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log(`Book trading API listening to port ${PORT}`);
    });
}

startServer();

