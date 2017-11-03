import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

import { HeaderComponent } from '../../layout/header/header.component';
import { MenuComponent } from '../../layout/menu/menu.component';
import { FooterComponent } from '../../layout/footer/footer.component';

import { DashboardData } from '../services/dashboard-data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

class MockDashboardData {
    dataChange = new BehaviorSubject<any[]>([]);

    constructor() {
        this.dataChange.next([{
            id: 1
        }]);
    }
}

describe('DashboardComponent', () => {
    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    SharedModule
                ],
                declarations: [
                    DashboardComponent,
                    HeaderComponent,
                    MenuComponent,
                    FooterComponent
                ],
                providers: [
                    { provide: DashboardData, useClass: {} }
                ]
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
