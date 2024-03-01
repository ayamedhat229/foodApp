import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private _httpClient:HttpClient) { }
  getAllCartegories(params:any):Observable<any>{
    return this._httpClient.get('Category',{ params})//{params:{name:Search}})
  }
  onAddCategory(data:string):Observable<any>{
    return this._httpClient.post('Category',{name:data} )
  }
  onEditCategory(name:string,id:string):Observable<any>{
    return this._httpClient.put(`Category/${id}`,{name})
  }
  onDeleteCategory(id: any):Observable<any>{
    return this._httpClient.delete(`Category/${id}`)
  }
}
