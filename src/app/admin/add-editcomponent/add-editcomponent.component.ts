import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-editcomponent',
  templateUrl: './add-editcomponent.component.html',
  styleUrl: './add-editcomponent.component.scss'
})
export class AddEditcomponentComponent implements OnInit{
  name:string='';
  constructor(
    public dialogRef: MatDialogRef<AddEditcomponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    
  }
}
