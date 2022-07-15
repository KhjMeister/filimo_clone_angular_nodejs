import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { NotifyService } from 'src/app/services/notify.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    fullname: ['', [Validators.required]],
    phone: ['', [Validators.required,Validators.pattern('09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}')]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4),Validators.maxLength(8)]],
    
}  );
  get f() { return this.registerForm.controls; }

  userRegister:User[] = []; 
  
  constructor(
    private formBuilder: FormBuilder,
    public auth:AuthService,
    private router:Router,
    private alert:NotifyService
    ) { }

    register(){
      if (this.registerForm.valid) {
        this.userRegister = Object.assign({},this.registerForm.value);
        this.auth.register(this.userRegister).subscribe(()=>{
          this.alert.success(" ثبت نام موفقیت آمیز بود");
        },(error:any) =>{
          this.alert.error(error.error.msg);
        },()=>{
          this.auth.login(this.userRegister).subscribe(()=>{
            this.router.navigate(['/dashboard']);
          });
        });
      }
  }

  ngOnInit(): void {
  }

}
