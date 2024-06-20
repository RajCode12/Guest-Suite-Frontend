import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Module/admin/admin-home/admin-home.component';
import { ManageProductComponent } from './Module/admin/manage-product/manage-product.component';
import { RoomComponent } from './Module/admin/room/room.component';
import { SettingComponent } from './Module/admin/setting/setting.component';
import { ManageUserComponent } from './Module/admin/manage-user/manage-user.component';
import { AssistComponent } from './Module/router/assist/assist.component';
import { ExploreComponent } from './Module/router/explore/explore.component';
import { HomeComponent } from './Module/router/home/home.component';
import { ProductComponent } from './Module/router/product/product.component';
import { LoginComponent } from './Module/user/login/login.component';
import { PasswordComponent } from './Module/user/password/password.component';
import { ProfileComponent } from './Module/user/profile/profile.component';
import { SignupComponent } from './Module/user/signup/signup.component';
import { FoodHomeComponent } from './Module/Food/food-home/food-home.component';
import { RoomHomeComponent } from './Module/room/room-home/room-home.component';
import { BookRoomComponent } from './Module/room/book-room/book-room.component';
import { BookFoodComponent } from './Module/Food/book-food/book-food.component';
import { RoomPaymentComponent } from './Module/payment/room-payment/room-payment.component';
import { FoodPaymentComponent } from './Module/payment/food-payment/food-payment.component';
import { CabPaymentComponent } from './Module/payment/cab-payment/cab-payment.component';


const routes: Routes = [
  //Admin
  {path:'admin-home',component:AdminHomeComponent},
  {path:'manage-product',component:ManageProductComponent},
  {path:'manage-room',component:RoomComponent},
  {path:'setting',component:SettingComponent},
  {path:'manage-user',component:ManageUserComponent},

  //User
  {path:'login',component:LoginComponent},
  {path:'password',component:PasswordComponent},
  {path:'profile',component:ProfileComponent},
  {path:'signup',component:SignupComponent},

  //Router
  {path:'assist',component:AssistComponent},
  {path:'explore',component:ExploreComponent},
  {path:'home',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  //Room
  {path:'food-home',component:FoodHomeComponent},
  {path:'book-food',component:BookFoodComponent},

  //Food
  {path:'room-home',component:RoomHomeComponent},
  {path:'book-room', component: BookRoomComponent},

  //Payment
  {path:'room-pay', component:RoomPaymentComponent},
  {path:'food-pay',component:FoodPaymentComponent},
  {path:'cab-pay',component:CabPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
