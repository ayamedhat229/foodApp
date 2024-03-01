import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  hide:boolean=true;
constructor(private _AuthService:AuthService, private toastr: ToastrService, private _Router:Router){}
loginForm = new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
})


onSubmit(data:FormGroup){
console.log(data)
this._AuthService.userLogin(data.value).subscribe(
 {
  next:(res)=>{    
    console.log(res);
    localStorage.setItem('userToken', res.token)
    this._AuthService.getProfile();
  },error:(err:any)=>{
    console.log(err)
    this.toastr.error('try again', 'login not sucess');
  },complete:()=>{
    this.toastr.success('Hello', 'login sucess');
    this._Router.navigateByUrl('/dashboard/home')
  }, 
},
)
}

ngOnInit(): void {
  
}
}
