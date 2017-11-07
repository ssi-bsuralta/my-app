import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import { setPassport } from './my.passport';
import { setGraphQL } from './my.graphql';

class App {
    express = express();

    constructor() {
        this.middleware();
        setPassport(this);
        setGraphQL(this);
    }

    middleware() {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.text({ type: 'application/graphql' }));
        this.express.use(morgan('combined'));
    }
}

export const myApp = new App().express;
