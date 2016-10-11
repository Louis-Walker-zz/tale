import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { AuthService } from '../../../services/auth.service';
import { ProfileService } from './profile.service';

import { Profile, ProfileStats } from './profile';

@Component({
  selector: 'tale-profile',
  templateUrl: 'tale-profile.component.html',
  styleUrls: ['tale-profile.component.css'],
  providers: [ AuthService, ProfileService ]
})
export class ProfileComponent implements OnInit {
  private profile: Profile;
  private profileStatsShow: boolean = false;

  constructor(
    private $auth: AuthService,
    private $p: ProfileService
  ) {
  }

  ngOnInit() {
    this.$p.getProfile()
      .subscribe( ( profile ) => {
        this.profile = profile;
        this.profileStatsShow = true;
    })
  }

  logout() {
    this.$auth.logout();
  }

  // Pass the index from ng2's iteration and return the index of profile.stats key
  profileStatsKey( i ): string {
    return _.capitalize( Object.keys(this.profile["stats"])[i] );
  }
}