import { Component, ViewChild, OnInit, HostBinding } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { slideInDownAnimation } from '../../shared/animations';

import { DashboardDataService } from './dashboard.data.service';
import { AuthService } from '../../login/services/auth.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardDataService],
    animations: [slideInDownAnimation]
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['id', 'order_number', 'study_name', 'progress', 'user_id'];
    dataSource = new MatTableDataSource();
    resultsLength = 0;
    Math = Math;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';

    constructor(private data: DashboardDataService) { }

    ngOnInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        Observable.merge(this.sort.sortChange, this.paginator.page)
            .startWith(null)
            .switchMap(() => {
                return this.data.getData();
            })
            .subscribe(data => {
                this.listenData(data['data']['orders']);
            });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    listenData(data) {
        data.forEach(element => {
            element['progress'] = Math.floor(Math.random() * 100);
        });
        this.dataSource.data = data;

        const self = this;
        const connection = new WebSocket('ws://' + window.location.hostname + ':3000/ws');

        connection.onopen = () => {
            console.log('connected');
            connection.send(JSON.stringify(data));
        };

        connection.onerror = (error) => {
            console.log(error);
        };

        connection.onmessage = (e) => {
            const res = JSON.parse(e.data);
            const tmp = self.dataSource.data;

            tmp.forEach((item, index) => {
                res.forEach(element => {
                    if (item['id'] === element['id']) {
                        tmp[index] = element;
                    }
                });
            });

            self.dataSource.data = tmp;
        };
    }
}
