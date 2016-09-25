import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Potential } from './potential';

@Injectable()
export class PotentialService {
  public potentials: Promise<Potential[]>;

  private potentialUrl: string = 'app/potentials';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.potentials = this.getPotentials();
  }

  // !TODO: handle desired ammounts and data types on http.get
  getPotentials(desire?: number, type?: string): Promise<Potential[]> {
    return this.http.get(this.potentialUrl)
      .toPromise()
      .then(res => res.json().data as Potential[])
      .catch(res => this.handleError());
  }

  handleError() {
    console.log('err');
  }

}
