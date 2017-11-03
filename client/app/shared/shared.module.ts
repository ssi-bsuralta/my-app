import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    MatInputModule, MatButtonModule,
    MatTableModule, MatSortModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        MatInputModule, MatButtonModule,
        MatTableModule, MatSortModule,
        MatToolbarModule
    ]
})
export class SharedModule { }
