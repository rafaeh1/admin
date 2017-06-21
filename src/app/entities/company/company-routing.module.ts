import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { CompanyListComponent } from "./company-list/company-list.component";

import { CompanyGuard } from "./company-guard.service";

const companyRoutes: Routes = [
    {
        path: '', component: CompanyListComponent,
        canLoad: [CompanyGuard],
        canActivate: [CompanyGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(companyRoutes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }