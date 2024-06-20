import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Service/User/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isLoggedIn=false;

  constructor(private userService: UserService, private router : Router) {}

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  createAccount() {
    if(!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/explore']);
    }
  }
}
