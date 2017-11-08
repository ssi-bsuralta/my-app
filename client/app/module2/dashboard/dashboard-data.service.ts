import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AuthService } from '../../login/services/auth.service';

@Injectable()
export class DashboardData {
    private headers = new Headers({ 'Content-Type': 'application/graphql', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    dataChange = new BehaviorSubject([]);

    get data() { return this.dataChange.value; }

    constructor(private http: Http, private authService: AuthService) {
        const user = authService.getUser();

        const query = `{
            orders(user_id: ${user.id}) {
                id
                order_number
                study_name
                user_id
            }
        }`;

        this.http
            .post('/api/graphQL', query, this.options)
            .map(res => res.json().data.orders)
            .forEach(item => this.dataChange.next(item));
    }
}
