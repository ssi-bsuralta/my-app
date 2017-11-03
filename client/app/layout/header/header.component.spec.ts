import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';

import { AuthService } from '../../login/services/auth.service';
import { UserService } from '../../login/services/user.service';

describe('HeaderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                HeaderComponent
            ],
            providers: [
                AuthService,
                UserService,
                {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
