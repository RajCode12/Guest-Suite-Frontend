import { Injectable } from '@angular/core';
import { Room } from '../../Class/Room/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomBooking } from '../../Class/RoomBooking/room-booking';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms';

  private startDate!:Date;
  private endDate!:Date;
  private myRoom:RoomBooking = new RoomBooking();
  private myRooms:Room[] = [];
  private diffDays!:number;

  constructor(private http: HttpClient) {}

  getHotelRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}/available`);
  }

  bookRoom(roomBooking: RoomBooking): Observable<RoomBooking> {
    return this.http.post<RoomBooking>(`${this.baseUrl}/book`, roomBooking);
  }
  getRoomFromBack() : Observable<RoomBooking[]>{
    return this.http.get<RoomBooking[]>(`${this.baseUrl}/records`);
  }

  
  setRoom(room:RoomBooking) : void {
    this.myRoom = room;
  }
  getRoom() : RoomBooking {
    return this.myRoom;
  }
  setRooms(rooms:Room[]) : void {
    this.myRooms = rooms;
  }
  getRooms() : Room[] {
    return this.myRooms;
  }
}
