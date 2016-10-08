import { Component, OnInit } from '@angular/core';

import { AppealService } from './appeal.service';

import { AppealModel } from './appeal.model';

@Component({
  selector: 'open-appeal',
  templateUrl: './open-appeal.component.html',
  styleUrls: ['./open-appeal.component.css'],
  providers: [ AppealService ]
})
export class OpenAppealComponent implements OnInit {
  // Show/hide form sub-components
  private showFacebook: boolean = false;
  private showTwitter: boolean = false;

  // Form object
  private appeal: AppealModel;

  // Google type ahead plugin
  public address: Object;

  constructor(
    private $a: AppealService
  ) {
    // Construct appeal form object
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

  public deleteAppeal() {
    // this.$a.del();
  }

  public reuniteAppeal() {
    // this.$a.reunite();
  }

  public submitAppeal(): void {
    let validated = this.validateForm();

    if ( validated ) {
      // Fill form object with data from inputs
      // TypeScript doesn't read the input as an HTMLInputElement so we must declare the generic type before accessing the value :D
      let _genderChecked = <HTMLInputElement> document.querySelector('input[name="gender"]:checked');
      this.appeal.gender = _genderChecked.value;

      this.$a.submit( this.appeal );
      
    } else {
      // TODO: Required field guard and user friendly message
      window.alert('Appeal failed to submit. Please try again.');
    }
  }

  // Appeal Form Bindings
  onDateChanged( epoc ) {
    this.appeal.timestamp = epoc;
  }

  getAddress( place: Object ) {       
    let location = place[ 'geometry' ][ 'location' ];

    this.appeal.location = new Array( location.lat(), location.lng() );
  }

  // Utility Methods
  // TODO: Real form validation :P
  private validateForm(): boolean {
    return false;
  }

  // Love me some convoluted boolean toggles
  private toggleBool( slug ) {
    switch( slug ) {
      // Show/hide form sub-components
      case     "facebook": this.showFacebook        = !this.showFacebook;        break;
      case      "twitter": this.showTwitter         = !this.showTwitter;         break;

      // Appeal Form Object Key Value Toggle
      case "microchipped": this.appeal.microchipped = !this.appeal.microchipped; break;
      case     "neutured": this.appeal.neutured     = !this.appeal.neutured;     break;
    }
  }
}
