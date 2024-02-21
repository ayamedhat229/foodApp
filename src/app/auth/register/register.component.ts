import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { VerfiyAccountComponent } from '../verfiy-account/verfiy-account.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  imgSrc:any;
  hide:boolean=true;
  hiden:boolean=true;
  constructor(private dialog: MatDialog ,private _Authservice:AuthService, private _Router:Router, private toastr: ToastrService){}
 registerForm=new FormGroup({
  userName:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  country:new FormControl(null,[Validators.required]),
  phoneNumber:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
 })

 registerUser(data:FormGroup){
  let myData=new FormData;
  myData.append('userName',data.value.userName);
  myData.append('email',data.value.email);
  myData.append('country',data.value.country);
  myData.append('phoneNumber',data.value.phoneNumber);
  myData.append('password',data.value.password);
  myData.append('confirmPassword',data.value.confirmPassword);
  myData.append('imgSrc',data.value.imgSrc);

 // console.log(myData);
  this._Authservice.userRegister(myData).subscribe(
    {
      next:(res)=>{
        console.log(res);
      },
      error:(err:any)=>{
        console.log(err)
        this.toastr.error('try again', 'register not sucess');
      },complete:()=>{
        this.toastr.success('Hello', 'register sucess');
        this.openDialog()
      }, 
    }
  )
 }
ngOnInit(): void {
 ;
}
files: File[] = [];

onSelect(event:any) {
  this.imgSrc=event.addedFiles[0];
  console.log(this.imgSrc);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
openDialog(){
  const dialogRef = this.dialog.open(VerfiyAccountComponent, {
    data: {},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    if(result){
      this.verfiyUserAccount(result);
    }
  });
 
}
verfiyUserAccount(data:any){
  this._Authservice.verfiyUser(data).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err:any)=>{
      console.log(err)
      this.toastr.error('try again', 'register not sucess');
    },complete:()=>{
      this.toastr.success('Activated Account Successfuly', 'register sucess');
      this._Router.navigateByUrl('/auth/login')
    }, 
  })
}
}


