import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { LayoutModule } from './layout.module';
import { MyInterceptor } from './http.interceptor';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        LayoutModule,
    ],
    providers: [
        HttpClient,
        { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    ]
})
export class SharedModule { }
