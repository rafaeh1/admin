import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main.component";

import { WellcomeComponent } from "../pages/wellcome/wellcome.component";

const mainRoutes: Routes = [
  {
    path: "", component: MainComponent,
    children: [
      { path: "", component: WellcomeComponent, pathMatch: 'full' },
      {
        path: "users",
        loadChildren: 'app/entities/user/user.module#UserModule',
        data: { title: "Usuarios" }
      },
      {
        path: "companies",
        loadChildren: 'app/entities/company/company.module#CompanyModule',
        data: { title: "Compañias" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }