import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { HospitalData } from '../components/services/hospitaldata';

@Injectable()
export class HospitalService {

  resourcedatpath: string = '/Palav/hospitaldata/';
  listings: FirebaseListObservable<any[]>;

  constructor(public afd: AngularFireDatabase) {
    this.listings = this.afd.list(this.resourcedatpath);
  }

  savehospital(hospitaldata)
  {
    return this.listings.push(hospitaldata);
  }

}
