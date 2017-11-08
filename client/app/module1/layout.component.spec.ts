import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AuthService } from '../login/services/auth.service';
import { mockAuth } from '../login/services/auth.mock';

describe('LayoutComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    SharedModule,
                    RouterTestingModule
                ],
                declarations: [
                    LayoutComponent,
                    HeaderComponent,
                    MenuComponent,
                    FooterComponent
                ],
                providers: [
                    { provide: AuthService, useValue: mockAuth }
                ]
            })
            .compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(LayoutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
