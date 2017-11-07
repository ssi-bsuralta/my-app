import { TestBed, async } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from '../layout/header/header.component';
import { MenuComponent } from '../layout/menu/menu.component';

describe('ContentComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [SharedModule],
                declarations: [
                    ContentComponent,
                    HeaderComponent,
                    MenuComponent
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
