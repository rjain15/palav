import { Component, OnInit } from '@angular/core';
import { ResourcesData } from './resourcesdata';
import {ResourceService} from '../../service/resource.service';
import {AuthService} from '../../service/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit
{

  name = 'Palav Resources....';
  resourcesData: ResourcesData[];
  filter: ResourcesData = new ResourcesData();

  numberOfResources: number;
  limit: number;
  minYear: number = 1996;
  maxYear: number = 2017;

  constructor(private resourceService: ResourceService,
             private authService: AuthService,
           private router: Router,) {
	this.getResourceData();
  }

  ngOnInit() {
  }

  getResourceData()
  {
   this.resourceService.getResourceData().subscribe(
      (resourcesData: ResourcesData[]) =>
      {
        this.resourcesData = resourcesData;
        this.numberOfResources = this.resourcesData.length;
        this.limit = this.resourcesData.length; // Start off by showing all books on a single page.
      });
  }


  increaseCounter(resourcesData: ResourcesData)
  {

	resourcesData.noOfEquipments = resourcesData.noOfEquipments + 1;
	console.log('resourcesData is:'+resourcesData.id + ':' + resourcesData.noOfEquipments);
  }

  decreaseCounter(resourcesData: ResourcesData)
  {
	if (resourcesData.noOfEquipments >= 1 )
	{
		resourcesData.noOfEquipments = resourcesData.noOfEquipments - 1;
	}
	console.log('resourcesData is:'+resourcesData.id + ':' + resourcesData.noOfEquipments);
  }

  saveReourceEquipmentInformation()
  {
    if (this.authService.isAuthenticated())
    {
      console.log('resourcesData is:' + this.resourcesData);
      alert('You are logged into Palav, please proceed with save resources');
    } else {
      alert('you are not logged into Palav, please login first');
      this.router.navigate(['/signup']);
    }

  }

}
