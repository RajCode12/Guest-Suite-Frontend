import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Service/User/user.service';
import { Router } from '@angular/router';
import { User } from '../../../Class/User/user';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{
  constructor(private router : Router, private userService : UserService) {}
  usr:User| null = null;
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.usr = user;
    });
    console.log(this.usr);
  }

  
}
