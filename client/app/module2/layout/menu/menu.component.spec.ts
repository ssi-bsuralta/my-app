import { TestBed, async } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared/shared.module';

describe('MenuComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [MenuComponent],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(MenuComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
