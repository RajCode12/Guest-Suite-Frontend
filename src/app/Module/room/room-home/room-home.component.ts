import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../../../Service/Room/room.service';
import { Room } from '../../../Class/Room/room';
import { RoomBooking } from '../../../Class/RoomBooking/room-booking';

@Component({
  selector: 'app-room-home',
  templateUrl: './room-home.component.html',
  styleUrl: './room-home.component.css'
})
export class RoomHomeComponent implements OnInit{
  roomBook: RoomBooking = new RoomBooking();
  today: string = new Date().toISOString().split('T')[0];
  datesValid: boolean = false;
  roomsDisplayed = false;

  rooms: Room[] = [];
  roomCategories: string[] = [];

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.roomService.getHotelRooms().subscribe(data => {
      this.rooms = data;
      this.roomCategories = this.getUniqueCategories();
      this.roomBook = this.roomService.getRoom();
      this.validateDates();
    });
  }

  getUniqueCategories(): string[] {
    const categories = this.rooms.map(room => room.type);
    return [...new Set(categories)];
  }

  getRoomsByCategory(category: string): Room[] {
    return this.rooms.filter(room => room.type === category && !room.isBooked);
  }

  validateDates() {
    if (!this.roomBook.startDate || !this.roomBook.endDate) {
      this.datesValid = false;
      return;
    }

    const start = new Date(this.roomBook.startDate);
    const end = new Date(this.roomBook.endDate);
    const now = new Date(this.today);

    this.datesValid = start >= now && end > start;
  }

  searchRoom() {
    if (this.roomBook.startDate && this.roomBook.endDate) {
      this.roomsDisplayed = true;
    }
  }

  selectRoom(category: string) {
    // Find the next available room in the selected category
    const availableRooms = this.getRoomsByCategory(category);
    if (availableRooms.length > 0) {
      const selectedRoom = availableRooms[0]; // Select the first available room

      // Populate RoomBooking details with selected room
      this.roomBook.roomNumber = selectedRoom.roomNumber;
      this.roomBook.type = selectedRoom.type;
      this.roomBook.roomPrice = selectedRoom.roomPrice;

      this.roomService.setRoom(this.roomBook);
    }
  }
}
