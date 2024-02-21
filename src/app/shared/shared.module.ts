import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule,
    MatDialogModule
  ],
exports:[HttpClientModule,ReactiveFormsModule,MatDialogModule]
})
export class SharedModule { }
