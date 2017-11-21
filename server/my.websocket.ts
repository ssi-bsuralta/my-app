import * as expressWs from 'express-ws';

export function setWebSocket(myExpress) {
    const myExpressWs = expressWs(myExpress);

    const myClients = [];

    myExpress.ws('/ws', (ws, req) => {
        ws.on('message', function (msg) {
            msg = JSON.parse(msg);

            msg.forEach(element => {
                myClients[element['id']] = {
                    element: element,
                    ws: ws,
                };
            });
        });
    });

    return myClients;
}
