import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material';

import { TableComponent } from './table.component';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    displayedColumns = ['id', 'order_number', 'study_name', 'user_id'];
    @ViewChild(TableComponent) myTable: TableComponent;
}
