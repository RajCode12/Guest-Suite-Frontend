import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cab } from '../../Class/Cab/cab';
import { CabBooking } from '../../Class/CabBooking/cab-booking';

@Injectable({
  providedIn: 'root'
})
export class CabService {

  private apiUrl = 'http://localhost:8080/api/v1/cabs';
  private myCab:CabBooking = new CabBooking();

  constructor(private http: HttpClient) { }

  getSources(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/sources`);
  }

  getDestinations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/destinations`);
  }

  getCabs(): Observable<Cab[]> {
    return this.http.get<Cab[]>(`${this.apiUrl}/cabs`);
  }

  bookCab(cabBooking: CabBooking): Observable<CabBooking> {
    return this.http.post<CabBooking>(`${this.apiUrl}/records`, cabBooking);
  }
  getCabFromBack() : Observable<CabBooking[]>{
    return this.http.get<CabBooking[]>(`${this.apiUrl}/records`);
  }

  setCab(cab:CabBooking) : void {
    this.myCab = cab;
  }
  getCab() : CabBooking {
    return this.myCab;
  }
}
