import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';

import { AuthService } from '../services/auth.service';
import { mockAuth } from '../../login/services/auth.mock';

describe('LoginComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [LoginComponent],
            providers: [
                { provide: AuthService, useValue: mockAuth },
                { provide: Router, useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); } }
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(LoginComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
