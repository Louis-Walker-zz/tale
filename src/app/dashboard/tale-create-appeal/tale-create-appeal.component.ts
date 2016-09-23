import { Component } from '@angular/core';

enum platform {
  facebook,
  twitter,
  instagram,
  mylostbox
}

@Component({
  selector: 'tale-create-appeal',
  templateUrl: 'tale-create-appeal.component.html',
  styleUrls: ['tale-create-appeal.component.css']
})
export class CreateAppealComponent {
  currentPlatform: platform;
  appealUrl: string;

  constructor() {
    this.currentPlatform = platform.facebook;
    this.appealUrl = "http://facebook.com/";
  }

  updatePlatform(): boolean {
    console.log(this.appealUrl);

    return true;
  }

  spritify(spriteName: string): string {
    return "http://" + window.location.hostname + ":" + window.location.port + "/sprites/" + spriteName + ".png";
  }

  openAppeal() {
  }
}
