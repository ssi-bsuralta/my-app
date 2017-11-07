import * as http from 'http';
import * as mongoose from 'mongoose';

import { myApp } from './app';

mongoose.connect('mongodb://127.0.0.1/ssi', { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const server = http.createServer(myApp);
const port = process.env.PORT || 3000;
server.listen(port);
server.on('listening', () => console.log(`Listening on port ${port}`));
server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') { throw error; }

    switch (error.code) {
        case 'EACCES':
            console.log(`${port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});
