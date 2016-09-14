import { Component } from '@angular/core';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'tale-profile',
  templateUrl: 'tale-profile.component.html',
  styleUrls: ['tale-profile.component.css']
})
export class ProfileComponent {
  profile: Object;
  tests: string[];

  constructor() {
    this.profile = {
        "username": "Louis Walker",
        "pictureURL": "http://placehold.it/64x64",
        "role": "Administrator",
        "stats": {
            "open": 7,
            "completed": 9,
            "reunited": 6
        }
    };
  }

  // Pass the index from ng2's iteration and return the index of profile.stats key
  profileStatsKey(i): string {
    return _.capitalize(Object.keys(this.profile["stats"])[i]);
  }
}
