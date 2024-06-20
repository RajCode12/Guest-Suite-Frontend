import { Component, OnInit } from '@angular/core';
import { UserService } from './Service/User/user.service';
import { Router } from '@angular/router';
import { User } from './Class/User/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Management';

  isLoggedIn=false;
  user: User | null = null;

  constructor(private userService: UserService, private router : Router) {}

  ngOnInit(): void {
    this.userService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }

  profileButton() {
    this.router.navigate(['/profile']);
  }
  capital(value: string | null | undefined): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  
  
}
