import { Injectable } from '@angular/core';
import {
    Request, RequestOptions, RequestOptionsArgs,
    Http, Response, XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ExtendedHttpService extends Http {
    constructor(backend: XHRBackend, defaultOptions: RequestOptions, private router: Router) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).catch(this.catchErrors());
    }

    private catchErrors() {
        return (res: Response) => {
            if (res.status === 401 || res.status === 403) {
                this.router.navigateByUrl('/logout');
            }
            return Observable.throw(res);
        };
    }
}
