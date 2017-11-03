import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DashboardData {
    private headers = new Headers({ 'Content-Type': 'application/graphql', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });
    dataChange = new BehaviorSubject([]);
    query = `{
        orders{
            id
            order_number
            study_name
            user_id
        }
    }`;

    get data() { return this.dataChange.value; }

    constructor(private http: Http) {
        this.http
            .post('/api/graphQL', this.query, this.options)
            .map(res => res.json().data.orders)
            .forEach(item => this.dataChange.next(item));
    }
}
