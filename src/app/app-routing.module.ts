import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"dashboards", pathMatch:"full" },
  { path : "dashboards", loadChildren : "./dashboard/dashboard.module#DashboardModule"},
  { path : "contacts", loadChildren : "./contact/contact.module#ContactModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
