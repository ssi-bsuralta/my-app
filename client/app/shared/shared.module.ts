import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import {
    MatInputModule, MatButtonModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatToolbarModule
} from '@angular/material';

import { ExtendedHttpService } from './extended-http.service';

@NgModule({
    exports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        MatInputModule, MatButtonModule,
        MatTableModule, MatSortModule, MatPaginatorModule,
        MatToolbarModule
    ],
    providers: [
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class SharedModule { }
