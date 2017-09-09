import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ResourcesData } from '../components/resources/resourcesdata';

@Injectable()
export class PaymentService
{
  resourcedatpath: string = '/Palav/paymentdata/';
  items: FirebaseListObservable<any[]>;
  listings: FirebaseListObservable<any[]>;

  constructor(public afd: AngularFireDatabase)
  {
    this.listings = this.afd.list(this.resourcedatpath);
  }

  savepayment(paymentdata)
  {
    console.log('inside paymentdata');
    return this.listings.push(paymentdata);
  }

}
