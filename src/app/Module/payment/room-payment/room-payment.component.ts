import { Component } from '@angular/core';
import { PaymentService } from '../../../Service/Payment/payment.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../../../Class/Payment/payment';
import { RoomService } from '../../../Service/Room/room.service';
import { RoomBooking } from '../../../Class/RoomBooking/room-booking';
import { Customer } from '../../../Class/Customer/customer';
import { UserService } from '../../../Service/User/user.service';
import { CustomerService } from '../../../Service/Customer/customer.service';
import { User } from '../../../Class/User/user';

@Component({
  selector: 'app-room-payment',
  templateUrl: './room-payment.component.html',
  styleUrl: './room-payment.component.css'
})
export class RoomPaymentComponent {

  constructor(private paymentService : PaymentService, private router : Router, 
    private roomService : RoomService, private customerService : CustomerService, private userService : UserService) {}
  payForm:FormGroup = new FormGroup({});
  days!:number;
  room:RoomBooking = new RoomBooking();
  payment : Payment = new Payment();
  customers:Customer[] = [];
  user:User| null = null;
  today: string = new Date().toISOString().split('T')[0];
  
  ngOnInit() {
    this.payForm = new FormGroup({
      upi:new FormControl(null,Validators.required)
    })
    this.room = this.roomService.getRoom();
    this.days = this.diffDays();
    this.customers = this.customerService.getCustomerList();
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
    console.log(this.customers);
  }

  // Method to calculate the difference in days
  diffDays(): number {
    if (!this.room.startDate || !this.room.endDate) {
      return 0;
    }

    // Ensure both dates are valid
    const startDate = new Date(this.room.startDate);
    const endDate = new Date(this.room.endDate);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return 0;
    }

    // Calculate the difference in milliseconds and convert to days
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    return Math.ceil(diffInDays);
  }

  onBack() {
    this.router.navigate(['/book-room']);
  }

  i!:number;
  onSubmit() {
    //add room
    //this.room.id = this.user!.id;
    this.room.isBooked = true;
    this.roomService.bookRoom(this.room).subscribe(bookedRoom => {
      if (bookedRoom) { 
        alert(`Room ${bookedRoom.roomNumber} in category ${bookedRoom.type} booked successfully!`);
      } else {
        alert('No available rooms in this category.');
      }
    });
    this.roomService.setRoom(this.room);

    for(this.i=0; this.i < this.customers.length; this.i++) {
      //adding multiple passenger
      this.customerService.addCustomer(this.customers[this.i]).subscribe(data=>{
        },
        error => console.log(error));
    }

    //add payment
    //this.payment.id = this.user!.id;
    this.payment.upiId = this.payForm.get('upi')?.value;
    this.payment.amount = this.days*this.room.roomPrice;
    this.payment.date = new Date(this.today);
    this.paymentService.addPayment(this.payment).subscribe(data=> {},
      error => console.log(error));

    //navigate
    this.router.navigate(['/home']);
  }
  
}
