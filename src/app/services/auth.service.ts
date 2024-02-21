import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  constructor(private _httpClient:HttpClient) { }
  userLogin(data:any){
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
 ngOnInit(): void {
   
 } 
}
