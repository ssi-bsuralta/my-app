import * as expressWs from 'express-ws';

export function setWebSocket(app) {
    const myExpressWs = expressWs(app.express);

    app.express.ws('/ws', (ws, req) => {
        ws.on('message', function (msg) {
            ws.send(msg + ' test');
        });
    });
}
