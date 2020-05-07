import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  users=[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers()
  }

}
