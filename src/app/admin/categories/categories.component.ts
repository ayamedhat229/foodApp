import { Component, Inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory, table } from '../../../models/category';
import { AddEditcomponentComponent } from '../add-editcomponent/add-editcomponent.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
  
  SearchKey:string='';
  tableData:ICategory[]=[];
  tableRsponse:any;
  length = 20;
  pageSize = 5;
  pageNumber=1;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 20];
  pageEvent:PageEvent|any;
  constructor(private _categoryService:CategoryService, public dialog: MatDialog){
  }
  getCategories(){
    let paramsApi={
    pageSize:this.pageSize,
    pageNumber:this.pageNumber,
    name:this.SearchKey,
    }
    this._categoryService.getAllCartegories(paramsApi).subscribe({
      next:(res)=>{
        console.log(res)
        this.tableRsponse=res;
        this.tableData=res.data;
      },error:(err:any)=>{
          console.log(err)
      },complete:()=>{
        console.log()
      }
    })
  }
  AddnewCategory(): void {
    const dialogRef = this.dialog.open(AddEditcomponentComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.AddCategory(result)
     }
    });
  }
  openEditCategory(categoryData:any):void{
    console.log(categoryData)
    const dialogRef = this.dialog.open(AddEditcomponentComponent, {
      data:categoryData
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.newEditCategory(result,categoryData.id)
     }
  });
}
newEditCategory(name:string, id:string){
this._categoryService.onEditCategory(name,id).subscribe({
  next:(res)=>{
   
  },error:(err:any)=>{
    console.log(err)
  },complete:()=>{
  this.getCategories()
  }
})
}
openDeleteCategory(categoryName:any):void{
  console.log(categoryName)
  const dialogRef = this.dialog.open(DeleteCategoryComponent, {
    data:categoryName
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   console.log(result)
   if(result){
    this.deleteCategory(result)
   }
});
}
deleteCategory(categoryId:any){
  this._categoryService.onDeleteCategory(categoryId).subscribe({
   next:(res)=>{
   },error:(err:any)=>{
    console.log(err);
   },complete:()=>{
    this.getCategories()
   }
  })
}
  AddCategory(categoryName:string){
    this._categoryService.onAddCategory(categoryName).subscribe({
      next:(res)=>{
      console.log(res)
      },error:(err:any)=>{
       console.log(err)
      },complete:()=>{
       this.getCategories()
      }
    })
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    //this.pageNumber=e.pageNumber;
    this.pageIndex = e.pageIndex;
  }

ngOnInit(): void {
    this.getCategories()
  }
}
