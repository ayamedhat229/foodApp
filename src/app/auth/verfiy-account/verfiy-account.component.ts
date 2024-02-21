import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService} from '../../services/auth.service';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-verfiy-account',
  templateUrl: './verfiy-account.component.html',
  styleUrl: './verfiy-account.component.scss'
})
export class VerfiyAccountComponent {
  constructor( private _AuthService:AuthService,private toastr:ToastrService,
    public dialogRef: MatDialogRef<VerfiyAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
verfiycode=new FormGroup({
  email:new FormControl(null),
  code:new FormControl(null)
 
})
onVerfiy(data:any){
  this._AuthService.verfiyUser(data).subscribe({
    next:(res)=>{
      console.log(res);
    },
    error:(err:any)=>{
      console.log(err)
      this.toastr.error('try again', 'register not sucess');
    },complete:()=>{
      this.toastr.success('Hello', 'register sucess');
      this.openDialog()
    }, 
  })
  
}
  openDialog() {
    throw new Error('Method not implemented.');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

