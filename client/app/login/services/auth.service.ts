import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthService {
    loggedIn;

    constructor(private userService: UserService, private router: Router) {
        const user = this.getUser();

        if (user) {
            this.loggedIn = true;
        }
    }

    login(emailAndPassword) {
        return this.userService.login(emailAndPassword).subscribe(
            res => {
                this.setUser(res.json());
                location.reload();
            }
        );
    }

    logout() {
        localStorage.removeItem('user');
        location.reload();
    }

    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
