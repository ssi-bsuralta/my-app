import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from '../layout/header/header.component';
import { MenuComponent } from '../layout/menu/menu.component';

import { AuthService } from '../login/services/auth.service';
import { mockAuth } from '../login/services/auth.mock';

describe('ContentComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    SharedModule,
                    RouterTestingModule
                ],
                declarations: [
                    ContentComponent,
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
        const fixture = TestBed.createComponent(ContentComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
