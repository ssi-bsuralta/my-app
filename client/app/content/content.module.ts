import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContentRoutingModule } from './content-routing.module';

import { HeaderComponent } from '../layout/header/header.component';
import { MenuComponent } from '../layout/menu/menu.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    imports: [
        SharedModule,
        ContentRoutingModule
    ],
    declarations: [
        HeaderComponent, MenuComponent,
        DashboardComponent,
        CreateComponent
    ]
})
export class ContentModule { }
