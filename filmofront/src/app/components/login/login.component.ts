import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  model:any = {
    username:null,
    password:null
  }; 
  
  constructor(private auth:AuthService,private router:Router,private alert:NotifyService ) { }

  login(){
    this.auth.login(this.model).subscribe(next =>{
      this.alert.success('با موفقیت وارد شدید');
    },error =>{
     
      this.alert.error(error.error.msg);

    },()=>{
      
      if(this.auth.isAdmin()===true){
        this.router.navigate(['/admin']);
      }else if(this.auth.isAdmin()===false){
        this.router.navigate(['/dashboard']);
      }
      
    });
  }
  loggedIn(){
    return this.auth.loggedIn();
  }

  ngOnInit(): void {
  }

}
