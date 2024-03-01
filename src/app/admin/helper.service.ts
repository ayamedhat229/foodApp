import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _httpClient:HttpClient) { }
  getTags():Observable<any>{
    return this._httpClient.get('tag/')
  }}
