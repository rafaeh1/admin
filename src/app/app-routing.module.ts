import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { LoginComponent } from "./login/login.component";
import { WellcomeComponent } from "./pages/wellcome/wellcome.component";

/* App Guards */
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
    {
        path: "login",
        loadChildren: 'app/login/login.module#LoginModule',
    },
    {
        path: "admin",
        loadChildren: 'app/main/main.module#MainModule',
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    { path: "", redirectTo: "/admin", pathMatch: 'full' },
    { path: "main", redirectTo: "/admin", pathMatch: 'full' },
    { path: "home", redirectTo: "/admin", pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }