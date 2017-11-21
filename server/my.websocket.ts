import * as expressWs from 'express-ws';

let myClientsMapper = 0;

export function setWebSocket(myExpress) {
    const myExpressWs = expressWs(myExpress);

    const myClients = [];
    const myElements = [];

    myExpress.ws('/ws', (ws, req) => {
        ws.on('message', function (msg) {
            myClientsMapper++;
            msg = JSON.parse(msg);
            myClients[myClientsMapper] = ws;

            msg.forEach(element => {
                myElements[element['id']] = {
                    element: element,
                    mapper: myClientsMapper,
                };
            });
        });
    });

    return [myClients, myElements];
}
