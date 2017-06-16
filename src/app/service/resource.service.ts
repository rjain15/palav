import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ResourcesData } from '../components/resources/resourcesdata';


@Injectable()
export class ResourceService
{
  resourcedatpath: string = '/Palav/data/';
  items: FirebaseListObservable<any[]>;
  constructor(private http: Http,public afd: AngularFireDatabase) { }

  getResourceData(): Observable<ResourcesData[]>
  {
    return this.afd.list(this.resourcedatpath);
  }
}
