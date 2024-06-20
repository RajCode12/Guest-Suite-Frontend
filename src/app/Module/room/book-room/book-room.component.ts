import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../Service/Room/room.service';
import { Router } from '@angular/router';
import { RoomBooking } from '../../../Class/RoomBooking/room-booking';
import { Customer } from '../../../Class/Customer/customer';
import { CustomerService } from '../../../Service/Customer/customer.service';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrl: './book-room.component.css'
})
export class BookRoomComponent implements OnInit{
  constructor(private roomService : RoomService, private router : Router, private customerService : CustomerService) {}

  room:RoomBooking = new RoomBooking();
  
  ngOnInit(): void {
    this.room = this.roomService.getRoom();
    //this.room.isBooked = true;
    this.customers = this.customerService.getCustomerList();
    // this.diffDays();
  }

  goToPayment() {
    this.customerService.setCustomerList(this.customers);
    this.router.navigate(['/room-pay']);
  }


  customers : Customer[] = [new Customer()];

  random : number = 0;
  i:number=0;
  
  addCount() {
    if(this.customers.length < 4) {
      this.customers.push(new Customer());
    } else {
      alert("Room Capacity is 4 Only.");
    }
    
  }
  deleteCount() {
    if(this.customers.length > 1) {
      this.customers.pop();
    } else {
      alert("Minimum 1 Customer Details is Required.");
    }
  }
  onBack() {
    this.router.navigate(['/room-home']);
  }
  
  
}
