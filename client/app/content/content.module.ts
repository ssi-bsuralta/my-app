import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ContentRoutingModule } from './content-routing.module';


@NgModule({
    imports: [
        SharedModule,
        ContentRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: []
})
export class ContentModule { }
