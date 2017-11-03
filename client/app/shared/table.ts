import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';

export class DashboardTable extends DataSource<any> {
    constructor(private _data, private _sort) {
        super();
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._data.dataChange,
            this._sort.sortChange
        ];

        return Observable.merge(...displayDataChanges)
            .map(() => this.getSortedData());
    }

    disconnect() { }

    getSortedData() {
        const data = this._data.data.slice();
        if (!this._sort.active || this._sort.direction === '') { return data; }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }
}
