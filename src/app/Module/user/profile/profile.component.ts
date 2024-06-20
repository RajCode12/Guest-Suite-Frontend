import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../Service/Room/room.service';
import { Router } from '@angular/router';
import { CustomerService } from '../../../Service/Customer/customer.service';
import { PaymentService } from '../../../Service/Payment/payment.service';
import { Customer } from '../../../Class/Customer/customer';
import { RoomBooking } from '../../../Class/RoomBooking/room-booking';
import { Payment } from '../../../Class/Payment/payment';
import { DatePipe } from '@angular/common';
import { UserService } from '../../../Service/User/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [DatePipe]
})
export class ProfileComponent implements OnInit{
  constructor(private router : Router, private customerService : CustomerService, private roomService : 
      RoomService, private paymentService : PaymentService, private datePipe : DatePipe, private userService : UserService) {}

  customers:Customer[] = [];
  rooms:RoomBooking[] = [];
  payments:Payment[] = [];
  // cabs:CabBooking[] = [];
  // foods:FoodBooking[] = [];
  selectedType: string = 'rooms';
  loggedIn!:boolean;

  ngOnInit(): void {
    this.loggedIn = this.userService.getLoggedIn();

    this.roomService.getRoomFromBack().subscribe(data => {
      this.rooms = data;
    });
    // this.customerService.getCustomerFromBack().subscribe(data => {
    //   this.rooms = data;
    // });
    this.paymentService.getPaymentFromBack().subscribe(data => {
      this.payments = data;
    });
  }

  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  logOut(): void {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      this.userService.setLoggedIn(false);
      this.router.navigate(['/login']);
    }
  }

  roomDetails() {
    this.router.navigate(['/hello']);
  }
}
