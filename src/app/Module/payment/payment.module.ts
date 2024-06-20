import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomPaymentComponent } from './room-payment/room-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FoodPaymentComponent } from './food-payment/food-payment.component';
import { CabPaymentComponent } from './cab-payment/cab-payment.component';



@NgModule({
  declarations: [
    RoomPaymentComponent,
    FoodPaymentComponent,
    CabPaymentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    RoomPaymentComponent,
    FoodPaymentComponent,
    CabPaymentComponent
  ]
})
export class PaymentModule { }
