import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material';

import { DashboardTable } from '../shared/table';
import { DashboardData } from '../services/dashboard-data.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardData]
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['id', 'order_number', 'study_name', 'user_id'];
    @ViewChild(MatSort) sort: MatSort;
    dataSource;

    constructor(private data: DashboardData) { }

    ngOnInit() {
        this.dataSource = new DashboardTable(this.data, this.sort);
    }
}
