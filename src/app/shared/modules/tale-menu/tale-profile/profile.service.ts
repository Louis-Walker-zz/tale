import { Injectable } from '@angular/core';

import { AngularFire, FirebaseAuthState, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class ProfileService {

  constructor(
    private $af: AngularFire
  ) {
   }

  getProfile( uid ): Observable<Object> {
    console.log("uuuuuu", uid);
    return this.$af.database.object('/users')
      .take(1)
      .map( user => user[uid] )
      .do( user => {
        console.log( "pro", user )
      });
  }

}
