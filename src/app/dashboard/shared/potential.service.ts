import { Injectable, OnInit, ChangeDetectorRef } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';

import { Potential } from '../../shared/modules/potential/potential';

@Injectable()
export class PotentialService {
  public potentials: Promise<Potential[]>;

  private potentialUrl: string = 'app/potentials';
  private filterOptions: Object;

  constructor(
    private $af: AngularFire
  ) {
  }

  ngOnInit() {

  }

  getPotentials( regions?: string[] ): any {
    let regionObservables: FirebaseObjectObservable<Object>[] = [];
    
    let regionQuery: Object = {
      query: {
        limitToLast: 6,
        orderByKey: true
      }
    };

    for ( let region in regions ) {
      let _shortName = regions[ region ];

      regionObservables.push( this.$af.database.object('/potentials/' + _shortName, regionQuery ));
    }

    return regionObservables[0].merge( ...regionObservables );
  }

  getLead( id ) {
    return this.$af.database.object('/leads/' + id);
  }

  handleError() {
    console.log('err');
  }
}