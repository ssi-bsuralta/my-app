import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

import { DashboardData } from './dashboard-data.service';
import { MockDashboardData } from './dashboard-data.mock';

describe('DashboardComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [SharedModule],
                declarations: [DashboardComponent],
                providers: [DashboardData]
            })
            .overrideComponent(DashboardComponent, {
                set: {
                    providers: [
                        { provide: DashboardData, useClass: MockDashboardData }
                    ]
                }
            })
            .compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(DashboardComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
