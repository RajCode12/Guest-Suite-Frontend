import { Component, OnInit } from '@angular/core';
import { Food } from '../../../Class/Food/food';
import { UserService } from '../../../Service/User/user.service';
import { Router } from '@angular/router';
import { FoodService, OrderItem } from '../../../Service/Food/food.service';

@Component({
  selector: 'app-food-home',
  templateUrl: './food-home.component.html',
  styleUrl: './food-home.component.css'
})
export class FoodHomeComponent implements OnInit{
  startersCounts: { [key: string]: number } = {};
  mainFoodCounts: { [key: string]: number } = {};
  drinksCounts: { [key: string]: number } = {};

  starters: Food[] = [];
  mainFood: Food[] = [];
  drinks: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit(): void {
    this.foodService.getStarters().subscribe(data => {
      this.starters = data;
      this.initializeCounts(this.starters, this.startersCounts);
    });

    this.foodService.getMainFood().subscribe(data => {
      this.mainFood = data;
      this.initializeCounts(this.mainFood, this.mainFoodCounts);
    });

    this.foodService.getDrinks().subscribe(data => {
      this.drinks = data;
      this.initializeCounts(this.drinks, this.drinksCounts);
    });
  }

  initializeCounts(items: Food[], counts: { [key: string]: number }): void {
    items.forEach(item => counts[item.name] = 0);
  }

  increment(item: Food): void {
    if (item.type === 'Breakfast') {
      this.startersCounts[item.name]++;
    } else if (item.type === 'Lunch') {
      this.mainFoodCounts[item.name]++;
    } else if (item.type === 'Drinks') {
      this.drinksCounts[item.name]++;
    }
  }

  decrement(item: Food): void {
    if (item.type === 'Breakfast' && this.startersCounts[item.name] > 0) {
      this.startersCounts[item.name]--;
    } else if (item.type === 'Lunch' && this.mainFoodCounts[item.name] > 0) {
      this.mainFoodCounts[item.name]--;
    } else if (item.type === 'Drinks' && this.drinksCounts[item.name] > 0) {
      this.drinksCounts[item.name]--;
    }
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    for (const item of [...this.starters, ...this.mainFood, ...this.drinks]) {
      totalPrice += item.foodPrice * this.getCount(item);
    }
    return totalPrice;
  }

  getCount(item: Food): number {
    if (item.type === 'Breakfast') {
      return this.startersCounts[item.name];
    } else if (item.type === 'Lunch') {
      return this.mainFoodCounts[item.name];
    } else if (item.type === 'Drinks') {
      return this.drinksCounts[item.name];
    }
    return 0;
  }

  placeOrder(): void {
    const orderItems: OrderItem[] = [];

    // Collect order items for starters
    for (const item of this.starters) {
      const quantity = this.startersCounts[item.name];
      if (quantity > 0) {
        orderItems.push({
          category: 'Breakfast',
          name: item.name,
          quantity: quantity,
          price: item.foodPrice * quantity
        });
      }
    }

    // Collect order items for main food
    for (const item of this.mainFood) {
      const quantity = this.mainFoodCounts[item.name];
      if (quantity > 0) {
        orderItems.push({
          category: 'Lunch',
          name: item.name,
          quantity: quantity,
          price: item.foodPrice * quantity
        });
      }
    }

    // Collect order items for drinks
    for (const item of this.drinks) {
      const quantity = this.drinksCounts[item.name];
      if (quantity > 0) {
        orderItems.push({
          category: 'Drinks',
          name: item.name,
          quantity: quantity,
          price: item.foodPrice * quantity
        });
      }
    }

    // Set the collected order items in the service
    this.foodService.setOrderItems(orderItems);

    // Navigate to the payment page
    this.router.navigate(['/book-food']);
  }
}
