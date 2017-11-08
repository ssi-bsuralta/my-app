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
    dataChange = new BehaviorSubject([]);

    get data() { return this.dataChange.value; }

    constructor(private http: HttpClient, private authService: AuthService) {
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
            .subscribe(res => {
                this.dataChange.next(res['data'].orders);
            });
    }
}
