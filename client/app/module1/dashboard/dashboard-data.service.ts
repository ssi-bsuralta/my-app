import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AuthService } from '../../login/services/auth.service';

@Injectable()
export class DashboardData {
    private headers = new HttpHeaders({
        'Content-Type': 'application/graphql',
        'charset': 'UTF-8'
    });
    private options = { headers: this.headers };

    dataChange;
    query;

    get data() { return this.dataChange.value; }

    constructor(private http: HttpClient, private authService: AuthService) {
        const user = authService.getUser();

        this.query = `{
            orders(user_id: ${user.id}) {
                id
                order_number
                study_name
                user_id
            }
        }`;

        this.getData();
        this.listenData();
    }

    getData() {
        this.dataChange = new BehaviorSubject([]);
        this.http
            .post('/api/graphQL', this.query, this.options)
            .subscribe(res => {
                this.dataChange.next(res['data'].orders);
            });
    }

    listenData() {
        const connection = new WebSocket('ws://' + window.location.hostname + ':3000/ws');
        connection.onopen = function () {
            console.log('connected');
            connection.send('Ping1');
        };

        connection.onerror = function (error) {
            console.log(error);
        };

        connection.onmessage = function (e) {
            console.log(e.data);
        };
    }
}
