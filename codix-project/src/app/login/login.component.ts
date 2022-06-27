import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:ApiserviceService )  {
  }
  getparamid:any;
  successmsg:any;
  errmsg:any;
  errmsgshow=false;



  ngOnInit(): void {
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
     
    })
  }
  loginForm = new FormGroup({

    'nickname' : new FormControl('',Validators.required),
    'password' : new FormControl('',Validators.required)
  });


loginSubmit()
{
    
console.log(this.loginForm.value,'loginform');
this.service.login(this.loginForm.value).subscribe((res)=>{
  console.log(res,'res==>');
  this.loginForm.reset();
  this.successmsg = res.message;
  
})
      
  }


  

  }
