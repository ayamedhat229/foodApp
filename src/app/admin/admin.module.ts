import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditcomponentComponent } from './add-editcomponent/add-editcomponent.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { RecipesComponent } from './recipes/recipes.component';
@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    AddEditcomponentComponent,
    DeleteCategoryComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],

})
export class AdminModule { }
