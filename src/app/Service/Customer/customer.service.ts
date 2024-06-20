import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../Class/Customer/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = 'http://localhost:8080/api/v1/customers';

  private customers : Customer[] = [new Customer()];

  constructor(private http: HttpClient) { }

  setCustomerList(customer : any) : void {
    this.customers = customer;
  }

  getCustomerList() : any {
    return this.customers;
  }

  addCustomer(customer : Customer) {
    return this.http.post(`${this.baseURL}/records`, customer);
  }
  getPayment(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseURL}/records`);
  }
}
