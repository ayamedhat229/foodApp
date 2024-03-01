import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  role:string|any='';
 //token= localStorage.getItem('userToken');
  constructor(private _httpClient:HttpClient, private _Router:Router) { 
  
    if(localStorage.getItem('userToken')!==null){
     this.getProfile()
    }
  }
  userLogin(data:any):Observable<any>{
   return this._httpClient.post('Users/Login',data)
  }
  userRegister(data:any){
    return this._httpClient.post('Users/Register',data)
  }
  verfiyUser(data:any){
    return this._httpClient.put('Users/verify',data)
  }
  forgetPassword(data:any){
    return this._httpClient.post('Users/Reset/Request',data);
  }
  resetPassword(data:any){
    return this._httpClient.post('Users/Reset',data)
  }
  getProfile(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded:any=jwtDecode(encoded);
    localStorage.setItem('userRole',decoded.userGroup);
    localStorage.setItem('userName',decoded.userName);
   this.getRole()
    console.log(decoded)
  }
  getRole(){
    if(localStorage.getItem('userToken')!==null&&(localStorage.getItem('userRole')!==null)){
     this.role=localStorage.getItem('userRole')
     console.log(this.role);
    }
  }
  logOut(){
   /* localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userToken');*/
    this._Router.navigateByUrl('/auth/login')
    localStorage.clear()
  }
  
 ngOnInit(): void {
   
 } 
}
