import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { VolunteerData } from '../components/services/volunteerData';

@Injectable()
export class VolunteerService {


resourcedatpath: string = '/Palav/volunteerdata/';
listings: FirebaseListObservable<any[]>;

  constructor(public afd: AngularFireDatabase) {
    this.listings = this.afd.list(this.resourcedatpath);
  }

  savevolunteer(volunteerData)
  {
    return this.listings.push(volunteerData);
  }

}
