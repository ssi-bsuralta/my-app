import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardLogin } from './login/services/auth-guard-login.service';
import { LogoutService } from './login/services/logout.service';

export const routes: Routes = [
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'logout', loadChildren: 'app/login/login.module#LoginModule', canActivate: [LogoutService] },
    { path: '', loadChildren: 'app/content/content.module#ContentModule', canActivate: [AuthGuardLogin] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
