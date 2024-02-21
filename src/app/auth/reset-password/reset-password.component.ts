import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  hide:boolean=true;
  hiden:boolean=true;
  constructor(private _AuthService:AuthService, private _Router:Router,private toastr: ToastrService){}
  resetPassForm=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    seed:new FormControl(null,[Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  })
  onSubmit(data:FormGroup){
    console.log(data)
    this._AuthService.resetPassword(data.value).subscribe({
      next:(res)=>{
        this._Router.navigateByUrl('/auth/login');
        console.log(res);
      },error:(err:any)=>{
        console.log(err)
        this.toastr.error('Try again', 'Email not valid');
      },complete:()=>{
        this.toastr.success('Reset Password done', 'Sucess');
      }
    })
  }
  ngOnInit(): void {
    
  }

}
