import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

//import {MatTableDataSource, MatTableModule} from '@angular/material/table';
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
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule
  ],
exports:[
  HttpClientModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  FormsModule,
  MatPaginatorModule,
  MatSelectModule
 ]
})
export class SharedModule { }
