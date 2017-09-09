import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SponserService} from '../../service/sponser.service';
import { SponserData } from './sponserData';

import {VolunteerService} from '../../service/volunteer.service';
import { VolunteerData } from './volunteerData';

import {HospitalService} from '../../service/hospital.service';
import { HospitalData } from './hospitaldata';

import {PaymentService} from '../../service/payment.service';

import {ViewChild, ElementRef} from '@angular/core';

declare let paypal: any;


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  private didRenderPaypal: boolean = false;
  private loading: boolean = true;

  sponserData: SponserData;
  volunteerData:VolunteerData;
  hospitalData:HospitalData;

  env = 'sandbox';
  client = {
     sandbox:    'AekQNvpqvRSDSryf1j0MmWlr6UZLSdoXsD-irIFXiKYlyHESkYnSASUHbW65FyXIOAxkQD7SPWGPenLP',
     production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
   }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox:    'AekQNvpqvRSDSryf1j0MmWlr6UZLSdoXsD-irIFXiKYlyHESkYnSASUHbW65FyXIOAxkQD7SPWGPenLP',
      production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
    },
    commit:true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: '1.00', currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      console.log('sucess in config object..'+ this);
      console.log('sucess in config object..'+ this.paymentService);
      this.paymentService.savepayment(data);
      console.log('sucess in config object..completed'+ this.paymentService);
    }
  }
  commit = true;

  @ViewChild('closesponser') closesponser: ElementRef;
  @ViewChild('closevolunteer') closevolunteer: ElementRef;
  @ViewChild('closehospital') closehospital: ElementRef;

  constructor(private sponserService: SponserService,
              private volunteerService: VolunteerService,
            private hospitalService: HospitalService,
          private paymentService:PaymentService) {



  }

  ngOnInit() {
  }


  private payment(data, actions) {
       return actions.payment.create({
           transactions: [
               {
                   amount: { total: '1.00', currency: 'USD' }
               }
           ]
       });
   }

   private onAuthorize(data, actions)
   {
     console.log('data is:' + data);
     //console.log('this object is:' + paypal);
    // let servicesComponent = this.paymentService;
    return actions.payment.execute().then(function() {
        // Show a success page to the buyer
        console.log('payment success test');
        //servicesComponent.savepayment(data);
        console.log('after...payment success');
        //console.log('after...payment success'+servicesComponent);
    });
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

  private loadPaypalScript(): Promise<any>
  {
    this.didRenderPaypal = true;
    return new Promise((resolve, reject) =>
    {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  ngAfterViewChecked()
  {
    if(!this.didRenderPaypal)
    {
      this.loadPaypalScript().then(() =>
      {
        paypal.Button.render(this.paypalConfig, '#paypal-button');
         this.loading = false;
      });
    }
   }

}
