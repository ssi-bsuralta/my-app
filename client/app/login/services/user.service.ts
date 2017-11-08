import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';

@Injectable()
export class UserService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = { headers: this.headers };

    constructor(private http: HttpClient) { }

    login(credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    }

    logout() {
        return this.http.get('/api/logout', this.options);
    }
}
