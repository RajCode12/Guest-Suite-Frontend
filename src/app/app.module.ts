import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './Module/admin/admin.module';
import { UserModule } from './Module/user/user.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from './Module/router/router.module';
import { FoodModule } from './Module/Food/food.module';
import { RoomModule } from './Module/room/room.module';
import { PaymentModule } from './Module/payment/payment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    RouterModule,
    AdminModule,
    FoodModule,
    RoomModule,
    CommonModule,
    PaymentModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
