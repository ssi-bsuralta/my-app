import { Component, ViewChild, ElementRef, OnInit, HostBinding } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { DashboardTable } from '../../shared/table';
import { DashboardData } from './dashboard-data.service';
import { slideInDownAnimation } from '../../shared/animations';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardData],
    animations: [slideInDownAnimation]
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['id', 'order_number', 'study_name', 'user_id'];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('filter') filter: ElementRef;

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    constructor(private data: DashboardData) { }

    ngOnInit() {
        this.dataSource = new DashboardTable(this.data, this.sort, this.paginator);

        Observable.fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(() => {
                if (!this.dataSource) { return; }
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
}
