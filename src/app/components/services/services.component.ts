import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SponserService} from '../../service/sponser.service';
import { SponserData } from './sponserData';

import {VolunteerService} from '../../service/volunteer.service';
import { VolunteerData } from './volunteerData';

import {HospitalService} from '../../service/hospital.service';
import { HospitalData } from './hospitaldata';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  sponserData: SponserData;
  volunteerData:VolunteerData;
  hospitalData:HospitalData;

  @ViewChild('closesponser') closesponser: ElementRef;
  @ViewChild('closevolunteer') closevolunteer: ElementRef;
  @ViewChild('closehospital') closehospital: ElementRef;

  constructor(private sponserService: SponserService,
              private volunteerService: VolunteerService,
            private hospitalService: HospitalService) { }

  ngOnInit() {
  }

  savesponser(sponserform: NgForm)
  {
    this.sponserData = new SponserData(sponserform.value.sponsername,sponserform.value.messagetext);
    console.log('inside save sponser:'+sponserform.value.sponsername + ':'
     + sponserform.value.messagetext);
     this.sponserService.savesponser(this.sponserData).then(
       (item) =>
       {
 	        console.log(item.key);
          sponserform.value.sponsername = '';
          sponserform.value.messagetext = '';
          sponserform.reset();
          this.closesponser.nativeElement.click();

       });
  }


  savevolunteer(volunteerform: NgForm)
  {
    this.volunteerData = new VolunteerData(volunteerform.value.volunteername,volunteerform.value.volunteermessagetext);
    console.log('inside save sponser:'+volunteerform.value.volunteername + ':'
     + volunteerform.value.volunteermessagetext);
     this.volunteerService.savevolunteer(this.volunteerData).then(
       (item) =>
       {
         console.log(item.key);
         volunteerform.value.volunteername = '';
         volunteerform.value.volunteermessagetext = '';
         volunteerform.reset();
         this.closevolunteer.nativeElement.click();
       });
  }

  savehospital(hospitalform: NgForm)
  {
    this.hospitalData = new HospitalData(hospitalform.value.hospitalname,hospitalform.value.hospitalmessagetext);
    console.log('inside save hospitalform:'+hospitalform.value.hospitalname + ':'
     + hospitalform.value.hospitalmessagetext);
     this.hospitalService.savehospital(this.hospitalData).then(
       (item) =>
       {
         console.log(item.key);
         hospitalform.value.hospitalname = '';
         hospitalform.value.hospitalmessagetext = '';
         hospitalform.reset();
         this.closehospital.nativeElement.click();

       });
  }

}
