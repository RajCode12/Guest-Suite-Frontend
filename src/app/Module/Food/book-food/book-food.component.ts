import { Component, OnInit } from '@angular/core';
import { FoodService, OrderItem } from '../../../Service/Food/food.service';
import { PaymentService } from '../../../Service/Payment/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-food',
  templateUrl: './book-food.component.html',
  styleUrl: './book-food.component.css'
})
export class BookFoodComponent implements OnInit{
  orderItems: OrderItem[] = [];
  totalPrice: number = 0;

  constructor(private router : Router, private foodService : FoodService, private paymentService : PaymentService) {}

  ngOnInit(): void {
    this.orderItems = this.foodService.getOrderItems();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.orderItems.reduce((sum, item) => sum + item.price, 0);
  }

  orderFood() {
    this.router.navigate(['/food-pay']);
  }
}
