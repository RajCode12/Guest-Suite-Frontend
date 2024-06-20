import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomHomeComponent } from './room-home/room-home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { BookRoomComponent } from './book-room/book-room.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RoomHomeComponent,
    BookRoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports:[
    RoomHomeComponent,
    BookRoomComponent
  ]
  
})
export class RoomModule { }
