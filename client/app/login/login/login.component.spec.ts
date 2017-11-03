import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

describe('LoginComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                LoginComponent
            ],
            providers: [
                AuthService,
                UserService,
                {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
