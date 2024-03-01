import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,children:[
  {path:'recipes',component:RecipesComponent},
  {path:'categories', component:CategoriesComponent}
  ]}
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
