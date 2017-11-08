import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthService {
    loggedIn = false;

    constructor(private userService: UserService, private router: Router) {
        const user = this.getUser();

        if (user && user.name) {
            this.loggedIn = true;
        }
    }

    login(userAndPassword) {
        return this.userService.login(userAndPassword).subscribe(
            res => {
                this.loggedIn = true;
                this.setUser(res);
                location.reload();
            }
        );
    }

    logout() {
        return this.userService.logout().subscribe(
            res => {
                this.loggedIn = false;
                localStorage.removeItem('user');
                location.reload();
            }
        );
    }

    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
