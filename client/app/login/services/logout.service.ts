import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class LogoutService implements CanActivate {
    constructor(public auth: AuthService) { }

    canActivate() {
        this.auth.logout();
        return false;
    }
}
