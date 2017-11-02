import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material';

import { DashboardTable } from '../services/dashboard-table.service';
import { DashboardData } from '../services/dashboard-data.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    providers: [DashboardData]
})
export class TableComponent implements OnInit {
    displayedColumns = ['id', 'order_number', 'study_name', 'user_id'];
    @ViewChild(MatSort) sort: MatSort;
    dataSource;

    constructor(private data: DashboardData) { }

    ngOnInit() {
        this.dataSource = new DashboardTable(this.data, this.sort);
    }
}
