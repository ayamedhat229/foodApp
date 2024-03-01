import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss'
})
export class DeleteCategoryComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  
  onNoClick(){
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
}
