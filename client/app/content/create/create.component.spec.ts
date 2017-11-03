import { TestBed, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CreateComponent } from './create.component';
import { SharedModule } from '../../shared/shared.module';

import { HeaderComponent } from '../../layout/header/header.component';
import { MenuComponent } from '../../layout/menu/menu.component';

describe('DashboardComponent', () => {
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
