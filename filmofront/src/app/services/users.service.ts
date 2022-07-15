import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl=environment.apiUrl;
  constructor(private htpp:HttpClient) { }

  getAllUsers(){
    return this.htpp.get(this.baseUrl+'users/users');
  }
  getByRole(userId:any){
    return this.htpp.post(this.baseUrl+'users/getOne',userId);
  }
}
