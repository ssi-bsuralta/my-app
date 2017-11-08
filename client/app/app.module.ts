import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not.found.component';

import { AuthGuardLogin } from './login/services/auth-guard-login.service';
import { AuthService } from './login/services/auth.service';
import { UserService } from './login/services/user.service';
import { LogoutService } from './login/services/logout.service';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'logout',
        loadChildren: 'app/login/login.module#LoginModule',
        canActivate: [LogoutService]
    },
    {
        path: 'module1',
        loadChildren: 'app/module1/main.module#MainModule',
        canActivate: [AuthGuardLogin]
    },
    {
        path: 'module2',
        loadChildren: 'app/module2/main.module#MainModule',
        canActivate: [AuthGuardLogin]
    },
    { path: '', redirectTo: '/module1', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [
        AuthGuardLogin,
        AuthService,
        UserService,
        LogoutService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
