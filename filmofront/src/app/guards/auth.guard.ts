import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';
import { NotifyService } from '../services/notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate():  boolean  {
    if(this.auth.loggedIn()){
      return true;
    }
      this.alert.error('ابتدا باید ثبت نام کنید ');
      this.router.navigate(['/login']);
      return false;

  }
  constructor(
    private auth:AuthService,
    private router:Router,
    private alert:NotifyService

  ){}
  
}
