import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import * as _ from 'lodash';

@Injectable()
export class ProfileService {
  private uid: Promise<string> | string;

  constructor(
    private $af: AngularFire
  ) {
    this.setUid();
   }

  getProfile(): Observable<Object> {
    return this.$af.database.object('/users')
      .take(1)
      .map( users => _.get( users, this.uid ) )
      .do( user => {
        
      });
  }

  getUid(): Promise<string> {
    return this.$af.auth
      .take(1)
      .toPromise()
      .then( auth => {
        return auth.uid;
      })
  }

  setUid(): void {
    this.$af.auth
      .take(1)
      .toPromise()
      .then( auth => {
         this.uid = auth.uid;
      })
  }

}
