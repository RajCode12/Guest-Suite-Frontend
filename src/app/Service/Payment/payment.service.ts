import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../../Class/Payment/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = 'http://localhost:8080/api/v1/payments';

  constructor(private http: HttpClient) { }

  addPayment(pay : Payment): Observable<Object> {
    return this.http.post(`${this.baseURL}/records`,pay);
  }

  getPaymentFromBack(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.baseURL}/records`);
  }
}
