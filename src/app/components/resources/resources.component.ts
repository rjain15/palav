import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {FirebaseService} from '../../service/firebase.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  listings:any;
  constructor() { }

  ngOnInit()
  {
  //  this.firebaseService.getListings();

    /*.subscribe(listings => {
    console.log(listings);
    this.listings = listings;
});*/
  }

}
