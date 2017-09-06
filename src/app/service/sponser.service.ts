import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SponserData } from '../components/services/sponserData';

@Injectable()
export class SponserService {

  resourcedatpath: string = '/Palav/sponserdata/';
  listings: FirebaseListObservable<any[]>;

  constructor(public afd: AngularFireDatabase) {
    this.listings = this.afd.list(this.resourcedatpath);
  }

  savesponser(sponserData)
  {
    return this.listings.push(sponserData);
  }

}
