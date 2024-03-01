import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {

  constructor(private _httpClient:HttpClient) { }
  getAllRecipes(params:any):Observable<any>{
  return this._httpClient.get('Recipe',{ params})
  }
  onEditRecipe(name:string,id:string):Observable<any>{
    return this._httpClient.put(`Recipe/${id}`,{name})
  }
  onDeleteRecipe(id:any):Observable<any>{
    return this._httpClient.delete(`Recipe/${id}`)
  }
  ngOnInit(): void {
    
  }
}
