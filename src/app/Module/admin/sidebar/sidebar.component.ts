import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router : Router) {}
  homeButton() {
    this.router.navigate(['/admin-home']);
  }
  userButton() {
    this.router.navigate(['/manage-user']);
  }
  productButton() {
    this.router.navigate(['/manage-product']);
  }
  settingButton() {
    this.router.navigate(['/setting']);
  }
  roomButton() {
    this.router.navigate(['/manage-room']);
  }
}
