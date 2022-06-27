import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

successmsg:any;
getparamid:any;
  ngOnInit(): void {
  
  this.service.getSingleData(this.getparamid).subscribe((res)=>{
    console.log(res,'res==>');
   
  })
  }
  userForm = new FormGroup(
    {
      'nickname' :new FormControl('',Validators.required),
      'password' :new FormControl('',Validators.required),
      'cpassword' :new FormControl('',Validators.required),
      'email' :new FormControl('',Validators.required),
      'phone' :new FormControl('',Validators.required),
      'country' :new FormControl('',Validators.required)
    }
  );
  userUpdate(){
   console.log(this.userForm.value,'updatedform');
  this.service.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
    console.log(res,'resupdated');
    this.successmsg = res.message;

  })
} 
}
