import { NgModule } from '@angular/core';

import {
    MatInputModule, MatButtonModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatToolbarModule, MatProgressBarModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule, MatButtonModule,
        MatTableModule, MatSortModule, MatPaginatorModule,
        MatToolbarModule, MatProgressBarModule
    ]
})
export class MaterialModule { }
