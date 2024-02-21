import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnInit {
constructor(private _AuthService:AuthService, private toastr: ToastrService, private _Router:Router){}
forgetForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email])
})
onSubmit(data:FormGroup){
  console.log(data)
  this._AuthService.forgetPassword(data.value).subscribe({
    next:(res)=>{
      this._Router.navigateByUrl('/auth/resetPassword');
      console.log(res);
    },error:(err:any)=>{
      console.log(err)
      this.toastr.error('Try again', 'Email not valid');
    },complete:()=>{
      this.toastr.success('Send Code,Please check your Email', 'Sucess');
    }, 
  })
// if(data==""){
}

ngOnInit(): void {
  
}
}



