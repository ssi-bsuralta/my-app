import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HeaderComponent } from '../../layout/header/header.component';
import { MenuComponent } from '../../layout/menu/menu.component';

import { DashboardData } from './dashboard-data.service';
import { AuthService } from '../../login/services/auth.service';

const mockAuth = {
    getUser() {
        return { name: 'test' };
    }
};

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
                    MenuComponent
                ],
                providers: [
                    { provide: AuthService, useValue: mockAuth },
                    DashboardData
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

class MockDashboardData {
    dataChange = new BehaviorSubject<any[]>([]);

    constructor() {
        this.dataChange.next([{
            id: 1
        }]);
    }
}
