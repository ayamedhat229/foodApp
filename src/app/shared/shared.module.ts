import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule
  ],
exports:[
  HttpClientModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
 ]
})
export class SharedModule { }
