import * as http from 'http';
import * as debug from 'debug';
import * as mongoose from 'mongoose';

import App from './app';

mongoose.connect('mongodb://127.0.0.1/ssi', { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

const port = process.env.PORT || 3000;
App.set('port', port);
App.set('trust proxy', 1);

const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error: NodeJS.ErrnoException): void {
    if (error.syscall !== 'listen') { throw error; }
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.log(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening(): void {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}
