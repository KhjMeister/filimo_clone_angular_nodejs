import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveaccountComponent } from './components/activeaccount/activeaccount.component';
import { AdmindashboardComponent } from './components/admin/admindashboard/admindashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
          {
            path:"dashboard",
            component:DashboardComponent
          },
          {
            path:"buyaccount",
            component:ActiveaccountComponent
          },
          {
            path:"admin",
            component:AdmindashboardComponent
          }
        ]
  },
  
    { path:'**',redirectTo:'',pathMatch:'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
