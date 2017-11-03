import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthService {
    loggedIn;

    constructor(private userService: UserService, private router: Router) {
        let user = localStorage.getItem('currentUser');

        if (user) {
            this.loggedIn = true;
            user = JSON.parse(user);
        }
    }

    login(emailAndPassword) {
        return this.userService.login(emailAndPassword).subscribe(
            res => {
                localStorage.setItem('currentUser', JSON.stringify(res.json()));
                location.reload();
            }
        );
    }

    logout() {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}
