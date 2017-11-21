import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { setMongoose } from './my.mongoose';
import { setPassport } from './my.passport';
import { setGraphQL } from './my.graphql';
import { setWebSocket } from './my.websocket';

const myExpress = express();

myExpress.use(bodyParser.urlencoded({ extended: false }));
myExpress.use(bodyParser.json());
myExpress.use(bodyParser.text({ type: 'application/graphql' }));
myExpress.use(morgan('combined'));

setMongoose(myExpress);
setPassport(myExpress);
setGraphQL(myExpress);
const myClients = setWebSocket(myExpress);

const port = process.env.PORT || 3000;

myExpress.listen(port, () => {
    console.log(`Listening on port ${port}`);
    recursiveFunc();
});

function recursiveFunc() {
    if (myClients[38]) {
        const element = myClients[38].element;
        const ws = myClients[38].ws;
        element['progress'] = Math.round(Math.random() * 100);
        ws.send(JSON.stringify([element]));
    }
    setTimeout(recursiveFunc, 3000);
}
