import * as http from 'http';
import * as mongoose from 'mongoose';

import { myApp } from './app';

mongoose.connect('mongodb://localhost/ssi', { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const server = http.createServer(myApp);
const port = process.env.PORT || 3000;
myApp.listen(port, () => {
    console.log(`Listening on port ${port}`);
    recursiveFunc();
});
server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.syscall !== 'listen') { throw error; }

    switch (error.code) {
        case 'EACCES':
            console.log(`Port ${port} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(`Port ${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

function recursiveFunc() {
    setTimeout(recursiveFunc, 3000);
}
