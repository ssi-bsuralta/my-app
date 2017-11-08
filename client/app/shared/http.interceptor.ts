import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler, HttpRequest,
    HttpEvent, HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthService } from '../login/services/auth.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).do(
            evt => { },
            err => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            this.auth.logout();
                            break;
                    }
                }
            });
    }
}
