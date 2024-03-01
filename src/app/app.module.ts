import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalInterceptor } from './interceptors/global.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { VerfiyAccountComponent } from './auth/verfiy-account/verfiy-account.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    VerfiyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    NgxDropzoneModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton:true,
      
    }
   
    ),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:GlobalInterceptor,
      multi:true
    },
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
