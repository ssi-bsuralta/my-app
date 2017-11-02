import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    username = new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
    ]);
    password = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
    ]);

    constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

    ngOnInit() {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }

        this.loginForm = this.formBuilder.group({
            username: this.username,
            password: this.password
        });
    }

    login() {
        this.auth.login(this.loginForm.value).subscribe(
            res => {
                console.log('test');
                this.router.navigate(['/']);
            }
        );
    }
}
