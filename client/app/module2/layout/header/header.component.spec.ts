import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared/shared.module';

import { AuthService } from '../../login/services/auth.service';
import { mockAuth } from '../../login/services/auth.mock';

describe('HeaderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [HeaderComponent],
            providers: [
                { provide: AuthService, useValue: mockAuth }
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
