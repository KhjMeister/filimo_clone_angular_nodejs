import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user'
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  jwtHelper = new JwtHelperService();
  currentUser:any;
  decodedToken:any;
  constructor(private http:HttpClient) {   }

  login(model:any) {
     return this.http.post(this.baseUrl+'api/token/',model).pipe(
       map((response:any)=>{
          const user = response;
         
        if(user){
          localStorage.setItem('accessToken', user.access);
          localStorage.setItem('refreshToken',JSON.stringify(user.refresh));
          this.decodedToken= this.jwtHelper.decodeToken(user.access);
          this.currentUser = user.access;

          console.log(user.refreshToken)
        }
       })
       );

  }
  register(user:User[]){
    return this.http.post(this.baseUrl+'auth/register',user);
  }
  loggedIn(){
    const token:any = localStorage.getItem('accessToken');
   return !this.jwtHelper.isTokenExpired(token);
 }
 logout(){
   this.http.get(this.baseUrl+'auth/logout');
 }
 isAdmin(){
  const token:any = localStorage.getItem('accessToken');
  const decodedToken= this.jwtHelper.decodeToken(token);
  if (decodedToken.role==="Member"){
    return false;
  }else{
    return true;
  }
 }
}
