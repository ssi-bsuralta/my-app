import { TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { SharedModule } from '../../../shared/shared.module';

describe('FooterComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedModule],
            declarations: [FooterComponent],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(FooterComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
