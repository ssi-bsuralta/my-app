import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class MockDashboardData {
    dataChange = new BehaviorSubject<any[]>([]);

    constructor() {
        this.dataChange.next([{
            id: 1
        }]);
    }
}
