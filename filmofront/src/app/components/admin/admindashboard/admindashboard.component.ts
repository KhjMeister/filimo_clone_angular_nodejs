import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  user: any;
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    return this.users.getAllUsers().subscribe(data=>{
      this.user = data;
      console.log(data);
    });
  }

}
