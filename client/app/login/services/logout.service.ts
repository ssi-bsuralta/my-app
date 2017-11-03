import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LogoutService implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        localStorage.removeItem('currentUser');
        location.reload();
        return false;
    }
}
