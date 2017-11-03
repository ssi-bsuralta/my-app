import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RoutingModule } from './routing.module';

import { AuthGuardLogin } from './login/services/auth-guard-login.service';
import { AuthService } from './login/services/auth.service';
import { UserService } from './login/services/user.service';
import { LogoutService } from './login/services/logout.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpModule,
        RoutingModule
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuardLogin,
        AuthService,
        UserService,
        LogoutService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
