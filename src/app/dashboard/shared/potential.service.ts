import { Injectable, OnInit, ChangeDetectorRef } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';

import { Potential } from '../../shared/modules/potential/potential';

@Injectable()
export class PotentialService {
  private potentialUrl: string = 'app/potentials';
  private filterOptions: Object;

  constructor(
    private $af: AngularFire
  ) {
  }

  ngOnInit() {

  }

  getPotentials( regions?: string[] ): Observable<any> {
    let regionObservables: FirebaseListObservable<Object>[] = [];
    
    let regionQuery: Object = {
      query: {
        limitToLast: 6,
        orderByKey: true
      }
    };

    for ( let region in regions ) {
      let _shortName = regions[ region ];

      regionObservables.push( this.$af.database.list('/potentials/' + _shortName, regionQuery ));
    }

    // TODO: Stop first region duping
    return regionObservables[0].merge( ...regionObservables );
    //        .map( potential => {
    //          return potential["lead"] = this.getLead( potential["_lid"] );
    //        });
  }

  getLead( id ) {
    return this.$af.database.list('/leads/' + id);
  }

  handleError() {
    console.log('err');
  }
}