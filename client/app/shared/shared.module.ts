import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
    MatInputModule, MatButtonModule,
    MatTableModule, MatSortModule, MatPaginatorModule,
    MatToolbarModule
} from '@angular/material';

import { MyInterceptor } from './http.interceptor';

@NgModule({
    exports: [
        CommonModule,
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        MatInputModule, MatButtonModule,
        MatTableModule, MatSortModule, MatPaginatorModule,
        MatToolbarModule
    ],
    providers: [
        HttpClient,
        { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    ]
})
export class SharedModule { }
