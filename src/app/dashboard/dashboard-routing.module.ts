import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminGuard } from '../Guards/admin.guard'; 
import { UsersGuard } from '../Guards/users.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: DashboardComponent , children:[
   {path:'home', component:HomeComponent},
   
    {
      path: 'admin',
     canActivate: [AdminGuard],
      loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
    }, 
    {
      path: 'users',
      canActivate: [UsersGuard],
      loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
    }, 
  ]},
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
