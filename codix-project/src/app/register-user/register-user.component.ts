import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  router: any;
  public user: any = {};
  constructor(private service:ApiserviceService) { }

successmsg:any;

  ngOnInit(): void {
   
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
  userRegister(){
   
console.log(this.userForm.value);
this.service.createData(this.userForm.value).subscribe((res)=>{
  console.log(res,'res==>');
  this.userForm.reset();
  this.successmsg = res.message;
});
const { nickname, password, cpassword, email, phone, country } = this.user;
const data = {
  nickname,
  
  passwords: {
    password,
    cpassword,
  },
  email,
  phone, country,

};
let errors = [];
this.service.createData(data).subscribe((res) => {
  console.log(res);
  if (res && res.doc._id) {
    this.router.navigate(['/login']);
  }
  if(!nickname|| !email || !password || !cpassword) {
    errors.push({msg : "Please fill in all fields"})
}
if(password !== cpassword) {
  errors.push({msg : "passwords dont match"});
}

});
  
} 

isValid() {
  const { nickname, password, cpassword, email, phone, country } = this.user;
  return !( nickname && password && cpassword && email && phone && country);
}

validateEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

}
