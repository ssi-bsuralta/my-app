import { TestBed, async } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { SharedModule } from '../../shared/shared.module';

import { HeaderComponent } from '../../layout/header/header.component';
import { MenuComponent } from '../../layout/menu/menu.component';

import { AuthService } from '../../login/services/auth.service';
import { mockAuth } from '../../login/services/auth.mock';

describe('CreateComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    SharedModule
                ],
                declarations: [
                    CreateComponent,
                    HeaderComponent,
                    MenuComponent
                ],
                providers: [
                    { provide: AuthService, useValue: mockAuth }
                ]
            })
            .compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(CreateComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
