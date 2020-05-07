import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-plan401',
  templateUrl: './plan401.component.html',
  styleUrls: ['./plan401.component.css']
})
export class Plan401Component implements OnInit {
   users=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers()
  }

}
