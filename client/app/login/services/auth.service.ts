import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthService {
    loggedIn = false;
    isAdmin = false;

    constructor(private userService: UserService, private router: Router) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.loggedIn = true;
        }
    }

    login(emailAndPassword) {
        return this.userService.login(emailAndPassword);
    }

    setCurrentUser(user) {
        this.loggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
    }
}
