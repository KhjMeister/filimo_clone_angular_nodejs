import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn(){
    return this.auth.loggedIn();
  }
  logout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.auth.logout();
    localStorage.removeItem('user');
    this.auth.decodedToken =null;
    this.auth.currentUser = [];
    this.alert.success('با موفقیت خارج شدید');
    this.router.navigate(['login']);
  }

  constructor(
    public auth:AuthService,
    private router:Router,
    private alert:NotifyService
    ) { }

  ngOnInit(): void {
  }

}
