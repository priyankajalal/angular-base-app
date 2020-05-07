import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(){
    return [{"id":1,"name":"vinod"},{"id":2,"name":"priyanka"}]
  }
}
