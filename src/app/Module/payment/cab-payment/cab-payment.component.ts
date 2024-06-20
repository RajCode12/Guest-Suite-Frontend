import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../../../Class/Payment/payment';
import { CustomerService } from '../../../Service/Customer/customer.service';
import { PaymentService } from '../../../Service/Payment/payment.service';
import { RoomService } from '../../../Service/Room/room.service';
import { UserService } from '../../../Service/User/user.service';
import { User } from '../../../Class/User/user';
import { CabBooking } from '../../../Class/CabBooking/cab-booking';
import { CabService } from '../../../Service/Cab/cab.service';

@Component({
  selector: 'app-cab-payment',
  templateUrl: './cab-payment.component.html',
  styleUrl: './cab-payment.component.css'
})
export class CabPaymentComponent {
  constructor(private paymentService : PaymentService, private router : Router, 
    private roomService : RoomService, private customerService : CustomerService, private userService : UserService,
    private cabService : CabService) {}
  payForm:FormGroup = new FormGroup({});
  payment : Payment = new Payment();
  user:User| null = null;
  cab:CabBooking = new CabBooking();
  
  ngOnInit() {
    this.payForm = new FormGroup({
      upi:new FormControl(null,Validators.required)
    })
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
    this.cab = this.cabService.getCab();
  }

  onBack() {
    this.router.navigate(['/product']);
  }

  onSubmit() {
    this.cabService.bookCab(this.cab);

    this.payment.upiId = this.payForm.get('upi')?.value;
    this.payment.amount = this.cab.cabPrice;
    this.payment.date = this.cab.date;
    this.paymentService.addPayment(this.payment);
    this.paymentService.addPayment(this.payment);

    alert("Cab Booked Successfully");
    this.router.navigate(['/home']);
  }
}
