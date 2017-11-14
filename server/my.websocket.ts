import * as expressWs from 'express-ws';

export function setWebSocket(app) {
    const myExpressWs = expressWs(app.express);

    app.express.ws('/ws', (ws, req) => {
        ws.on('message', function (msg) {
            msg = JSON.parse(msg);
            const ret = [];

            msg.forEach(element => {
                if ([38, 40].indexOf(element['id']) !== -1) {
                    element['progress'] = 99;
                    ret.push(element);
                }
            });

            ws.send(JSON.stringify(ret));
        });
    });
}
