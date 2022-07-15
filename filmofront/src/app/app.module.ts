import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';

export function tokenGetter(){
  return localStorage.getItem('accessToken');

}

import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SlidshowComponent } from './components/slidshow/slidshow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActiveaccountComponent } from './components/activeaccount/activeaccount.component';
import { AuthGuard } from './guards/auth.guard';
import { NotifyService } from './services/notify.service';

import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IndexComponent,
    SlidshowComponent,
    FooterComponent,
    ActiveaccountComponent,
   
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        // disallowedRoutes: ['localhost:5000/auth'],
      },
    })
  ],
  providers: [AuthService,AuthGuard,NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
