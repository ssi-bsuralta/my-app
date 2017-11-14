import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../login/services/auth.service';

@Injectable()
export class DashboardDataService {
    private headers = new HttpHeaders({
        'Content-Type': 'application/graphql',
        'charset': 'UTF-8'
    });
    private options = { headers: this.headers };

    query;

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
    }

    getData() {
        return this.http.post('/api/graphQL', this.query, this.options);
    }
}
