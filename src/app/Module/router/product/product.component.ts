import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../Service/User/user.service';
import { Cab } from '../../../Class/Cab/cab';
import { CabService } from '../../../Service/Cab/cab.service';
import { CabBooking } from '../../../Class/CabBooking/cab-booking';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent{

  constructor(private userService : UserService,private cabService : CabService, private router : Router) {}

  sources: string[]=[];
  destinations: string[]=[];
  cabs: Cab[]=[];
  cabForm:FormGroup = new FormGroup({});
  cab:CabBooking = new CabBooking();
  
  ngOnInit() {
    this.cabService.getSources().subscribe(sources => {
      this.sources = sources;
    });

    this.cabService.getDestinations().subscribe(destinations => {
      this.destinations = destinations;
    });

    this.cabService.getCabs().subscribe(cabs => {
      this.cabs = cabs;
    });

    this.cabForm = new FormGroup({
      date:new FormControl(null,Validators.required),
      source:new FormControl(null,Validators.required),
      destination:new FormControl(null,Validators.required)
    })

    this.cab = this.cabService.getCab();

    if(!this.userService.getLoggedIn()) {
      //alert("Please Login First...");
      this.router.navigate(['/login']);
    }
  }

  showCabData = false;
  
  onSubmit() {
    this.cab.source = this.cabForm.get('source')?.value;
    this.cab.destination = this.cabForm.get('destination')?.value;
    this.cab.date = this.cabForm.get('date')?.value;
    this.showCabData = true;
  }

  bookCab(cabs:Cab) {
    this.cab.cabPrice = cabs.cabPrice;
    this.cab.carName = cabs.carName;
    this.cab.carNumber = cabs.carNumber;
    this.cab.seater = cabs.seater; 

    // this.cabService.bookCab(this.cab);
    console.log(this.cab);
    this.cabService.setCab(this.cab);
    this.router.navigate(['/cab-pay']);
  }
}
