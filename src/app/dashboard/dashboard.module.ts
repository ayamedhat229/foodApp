import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  
  ]
})
export class DashboardModule { }
