import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { LocalStorageService } from 'ng2-webstorage';

import { AuthService } from '../../../services/auth.service';
import { ProfileService } from './profile.service';

import { Profile, ProfileStats, ProfileTemp } from './profile';

@Component({
  selector: 'tale-profile',
  templateUrl: 'tale-profile.component.html',
  styleUrls: ['tale-profile.component.css'],
  providers: [ AuthService, ProfileService ]
})
export class ProfileComponent implements OnInit {
  profile;
  profileStats: ProfileStats;

  constructor(
    private $auth: AuthService,
    private $p: ProfileService
  ) {
    this.profile = {
      appeals: {
            open: [""],
            completed: [""],
            reunited: [""]
      },
      pictureUrl: "",
      fbuid: "",
      name: "",
      regions: [""],
      role: "",
      stats: {
            open: 300,
            completed: 300,
            reunited: 300
      }
};
  console.log("x", this.profile);
  }

  ngOnInit() {
    this.profile = this.$p.getProfile();
  }

  logout() {
    this.$auth.logout();
  }

  // Pass the index from ng2's iteration and return the index of profile.stats key
  profileStatsKey( i ): string {
    return _.capitalize( Object.keys(this.profile["stats"])[i] );
  }
}