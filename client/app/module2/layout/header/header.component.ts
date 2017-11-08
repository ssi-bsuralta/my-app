import { Component } from '@angular/core';

import { AuthService } from '../../../login/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    user;

    constructor(private authService: AuthService) {
        this.user = authService.getUser();
    }
}
