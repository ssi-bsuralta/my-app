import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule
    ],
    exports: [
        MaterialModule,
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        FooterComponent
    ]
})
export class LayoutModule { }
