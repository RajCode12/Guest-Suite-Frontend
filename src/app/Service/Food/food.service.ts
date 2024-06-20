import { Injectable } from '@angular/core';
import { Food } from '../../Class/Food/food';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface OrderItem {
  category: string;
  name: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private orderData: { item: Food, count: number }[] = [];

  private baseUrl = 'http://localhost:8080/api/v1/foods';

  private orderItemsSubject = new BehaviorSubject<OrderItem[]>([]);
  orderItems$ = this.orderItemsSubject.asObservable();

  constructor(private http: HttpClient) { }

  setOrderItems(orderItems: OrderItem[]): void {
    this.orderItemsSubject.next(orderItems);
  }

  getOrderItems(): OrderItem[] {
    return this.orderItemsSubject.getValue();
  }

  getStarters(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.baseUrl}/starters`);
  }

  getMainFood(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.baseUrl}/mainfood`);
  }

  getDrinks(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.baseUrl}/drinks`);
  }

  

  setOrderData(data: { item: Food, count: number }[]): void {
    this.orderData = data;
  }

  getOrderData(): { item: Food, count: number }[] {
    return this.orderData;
  }
}
