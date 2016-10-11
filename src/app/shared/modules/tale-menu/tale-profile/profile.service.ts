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
      .map( users => {
        let authUser = _.get( users, this.uid );

        authUser["pictureUrl"] = "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/13139307_1538140546489134_5924680215206630446_n.jpg?oh=6f85cdcec5020c3e12061293c18a3c73&oe=58A34142";

        authUser["stats"] = this.statFactory( authUser );

        return authUser;
      })
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

  statFactory( user ) {
    const _appeals = user.appeals;

    let stats: Object = {
           open: _appeals.open.length,
      completed: _appeals.completed.length,
       reunited: _appeals.reunited.length
    }

    return stats;
  }

}
