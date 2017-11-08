import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';

export class DashboardTable extends DataSource<any> {
    _filter = new BehaviorSubject('');
    filteredLength = 0;

    get filter(): string { return this._filter.value; }
    set filter(filter: string) { this._filter.next(filter); }

    constructor(private _data, private _sort, private _paginator) {
        super();
    }

    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._data.dataChange,
            this._sort.sortChange,
            this._paginator.page,
            this._filter
        ];

        return Observable.merge(...displayDataChanges)
            .map(() => {
                let data = this._data.data.slice().filter(item => {
                    let searchStr = '';
                    for (const key in item) {
                        if (item[key]) {
                            searchStr += '' + item[key];
                        }
                    }

                    return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
                });
                this.filteredLength = data.length;

                data = this.sortData(data);

                const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
                return data.splice(startIndex, this._paginator.pageSize);
            });
    }

    sortData(data) {
        if (!this._sort.active || this._sort.direction === '') { return data; }

        return data.sort((a, b) => {
            const propertyA: number | string = a[this._sort.active];
            const propertyB: number | string = b[this._sort.active];

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
        });
    }

    disconnect() { }
}
