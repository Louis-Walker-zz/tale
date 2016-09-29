import { Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Potential } from '../../shared/modules/potential/potential';

@Injectable()
export class PotentialService {
  public potentials: Promise<Potential[]>;

  private potentialUrl: string = 'app/potentials';
  private filterOptions: Object;

  constructor(
    private http: Http
  ) {
  }

  ngOnInit() {

  }

  // !TODO: handle desired ammounts and data types on http.get
  getPotentials(desire?: number, type?: string) {
    return [{
          "_id": 0,
          "lead": {
            "name": "Lost and Found UK",
            "profileUrl": "http://facebook.com",
            "pictureUrl": "http://placehold.it/72x72",
            "followers": 30000
          },
          "author": "First",
          "timestamp": 1474289940,
          "contentBody": "Lorem ipsum",
          "contentImageUrl": "http://placehold.it/300x300",
          "stats": {
            "likes": 32,
            "shares": 4
          },
          "region": "sw",
          "regionLong": "South West",
          "tags": ["important"]
        }]
  }

  handleError() {
    console.log('err');
  }

}