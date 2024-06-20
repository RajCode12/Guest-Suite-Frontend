import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../Service/User/user.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent implements OnInit {
  isLoggedIn=false;

  constructor(private userService: UserService, private router : Router) {}

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  checkLogin(event: Event): void {
    if (!this.isLoggedIn) {
      event.preventDefault();
      alert('Please log in to access this service.');
      this.router.navigate(['/login']);
    }
  }

}
