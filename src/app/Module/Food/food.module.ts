import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodHomeComponent } from './food-home/food-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookFoodComponent } from './book-food/book-food.component';



@NgModule({
  declarations: [
    FoodHomeComponent,
    BookFoodComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    FoodHomeComponent,
    BookFoodComponent
  ]
})
export class FoodModule { }
