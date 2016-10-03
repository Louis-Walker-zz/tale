import { Component, OnInit } from '@angular/core';

import { AppealService } from './appeal.service';

interface Appeal {
  title: string;
  description: string;
  timestamp: number;
  reward?: string;
  itemType: string;
  microchipped?: boolean;
  neutured?: boolean;
  gender?: string;
  location?: number[];
}

@Component({
  selector: 'open-appeal',
  templateUrl: './open-appeal.component.html',
  styleUrls: ['./open-appeal.component.css'],
  providers: [ AppealService ]
})
export class OpenAppealComponent implements OnInit {
  private showFacebook: boolean = false;
  private showTwitter: boolean = false;

  private appeal: Appeal;

  public address: Object;

  constructor(
    private $a: AppealService
  ) {
    this.appeal = {
      title: "",
      description: "",
      timestamp: 0,
      itemType: "", // Temp value until categories solution
      location: []
    }
  }

  ngOnInit() {
  }

  deleteAppeal() {
    // this.$a.del();
  }

  reuniteAppeal() {
    // this.$a.reunite();
  }

  submitAppeal() {
    let _genderChecked = <HTMLInputElement> document.querySelector('input[name="gender"]:checked');
    
    this.appeal.gender = _genderChecked.value;

    this.$a.submit( this.appeal );
  }

  onDateChanged( epoc ) {
    this.appeal.timestamp = epoc;
  }

  getAddress( place: Object ) {       
    let location = place['geometry']['location'];

    this.appeal.location = new Array(location.lat(), location.lng());
  }

  toggleBool( slug ) {
    switch( slug ) {
      // Hide DOM
      case     "facebook": this.showFacebook        = !this.showFacebook;        break;
      case      "twitter": this.showTwitter         = !this.showTwitter;         break;

      // Appeal Key Value Toggle
      case "microchipped": this.appeal.microchipped = !this.appeal.microchipped; break;
      case     "neutured": this.appeal.neutured     = !this.appeal.neutured;     break;
    }
  }
}
