import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../Class/User/user';
import { UserService } from '../../../Service/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User();
  confPassword: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {

    if (this.user.password !== this.confPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!this.user.email.endsWith('@gmail.com')) {
      alert("Email must be in the format 'example@gmail.com'");
      return;
    }

    this.userService.createUser(this.user).subscribe({
      next: (data) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        // Handle response errors accordingly
        if (error.includes("409")) {
          this.errorMessage = "Email already exists, please use a different email.";
        } else {
          this.errorMessage = "An error occurred: " + error;
        }
      }
    });
  }
}
