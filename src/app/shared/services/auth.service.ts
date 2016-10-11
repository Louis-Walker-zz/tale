import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    private $r: Router,
    private $af: AngularFire
  ) { }

  login() {
    this.$af.auth.login();
  }

  logout() {
    this.$af.auth.logout();

    this.$r.navigate(["login"]);
  }

  // Gets firebase authState and routes if authenticated passes check
  authorised( route?, check? ): Promise<boolean> {
    return this.$af.auth
      .take(1)
      .toPromise()
      .then(( authState: FirebaseAuthState ) => {
        let authenticated = !!authState;

        if ( route && ( check === authenticated )) {
          this.$r.navigate([ route ]);
        }

        return authenticated;
      })
  }

}
