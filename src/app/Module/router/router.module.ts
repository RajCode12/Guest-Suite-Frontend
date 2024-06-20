import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AssistComponent } from './assist/assist.component';
import { ExploreComponent } from './explore/explore.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Service/User/user.service';
import { FoodService } from '../../Service/Food/food.service';
import { AppRoutingModule } from '../../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AssistComponent,
    ExploreComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    AssistComponent,
    ExploreComponent,
    ProductComponent
  ],
  providers:[
    UserService,FoodService
  ]
})
export class RouterModule { }
