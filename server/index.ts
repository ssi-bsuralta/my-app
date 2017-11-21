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
    [2, 19, 29, 38].forEach(id => updateElement(id));
    setTimeout(recursiveFunc, 2000);
}

function updateElement(id) {
    if (myClients[id]) {
        if (myClients[id].ws.readyState === 1) {
            const element = myClients[id].element;
            const ws = myClients[id].ws;
            element['progress'] = Math.round(Math.random() * 100);
            ws.send(JSON.stringify([element]));
        } else {
            delete myClients[id];
        }
    }
}
