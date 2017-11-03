import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from '../layout/header/header.component';
import { MenuComponent } from '../layout/menu/menu.component';
import { FooterComponent } from '../layout/footer/footer.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { ContentRoutingModule } from './content-routing.module';


@NgModule({
    imports: [
        SharedModule,
        ContentRoutingModule
    ],
    declarations: [
        HeaderComponent, MenuComponent, FooterComponent,
        DashboardComponent
    ],
    providers: []
})
export class ContentModule { }
