import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../../../Class/Payment/payment';
import { CustomerService } from '../../../Service/Customer/customer.service';
import { PaymentService } from '../../../Service/Payment/payment.service';
import { RoomService } from '../../../Service/Room/room.service';
import { UserService } from '../../../Service/User/user.service';
import { User } from '../../../Class/User/user';
import { RoomBooking } from '../../../Class/RoomBooking/room-booking';
import { FoodService, OrderItem } from '../../../Service/Food/food.service';

@Component({
  selector: 'app-food-payment',
  templateUrl: './food-payment.component.html',
  styleUrl: './food-payment.component.css'
})
export class FoodPaymentComponent {
  constructor(private paymentService : PaymentService, private router : Router, 
    private roomService : RoomService, private customerService : CustomerService, private userService : UserService,
    private foodService : FoodService) {}
  payForm:FormGroup = new FormGroup({});
  payment : Payment = new Payment();
  user:User| null = null;
  room:RoomBooking = new RoomBooking();
  orderItems: OrderItem[] = [];
  totalPrice: number = 0;
  
  ngOnInit() {
    this.payForm = new FormGroup({
      upi:new FormControl(null,Validators.required)
    });
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
    this.room = this.roomService.getRoom();
    this.orderItems = this.foodService.getOrderItems();
    this.calculateTotalPrice();

  }

  calculateTotalPrice(): void {
    this.totalPrice = this.orderItems.reduce((sum, item) => sum + item.price, 0);
  }

  onBack() {
    this.router.navigate(['/book-food']);
  }

  onSubmit() {
    alert("Food Successfully Ordered");
    this.router.navigate(['/home']);
  }
}
