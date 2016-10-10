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
  getPotentials(desire?: number, type?: string): any {
    /*return this.http.get('app/potentials')
      .toPromise()
      .then(res => res.json().data as Potential[])
      .catch(this.handleError);*/
  }

  handleError() {
    console.log('err');
  }

}