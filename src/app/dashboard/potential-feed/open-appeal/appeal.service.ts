import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';

@Injectable()
export class AppealService {

  constructor() { }

  submit( appeal ) {
    this.subLostbox();
    this.subFacebook();
    this.subTwitter();
    this.subTale();

    console.log( appeal );
  }

  subLostbox() {
    
  }

  subFacebook() {

  }

  subTwitter() {
    
  }

  subTale() {
    
  }

}
