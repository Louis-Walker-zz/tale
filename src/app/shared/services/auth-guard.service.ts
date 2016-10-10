import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { LocalStorage } from 'ng2-webstorage';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

  @LocalStorage()
  private uid: string;

  constructor(
    private $r: Router,
    private $af: AngularFire
  ) { }

  canActivate(): Observable<boolean> {
    return this.$af.auth
      .take(1)
      .map(( authState: FirebaseAuthState ) => { this.uid = authState.uid; return !!authState } )
      .do( authenticated => {
        if ( !authenticated ) {
          this.routeToLogin();
        }
      });
  }

  routeToLogin(): void {
    this.$r.navigate(["login"]);
  }

}
