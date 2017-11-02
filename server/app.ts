import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

import setPassport from './passport';
import setGraphQL from './graphQL';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        setPassport(this);
        setGraphQL(this);
    }

    private middleware(): void {
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.text({ type: 'application/graphql' }));
        this.express.use(morgan('combined'));
    }
}

export default new App().express;
