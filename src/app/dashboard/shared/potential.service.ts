import { Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Potential } from '../../shared/modules/potential/potential';

@Injectable()
export class PotentialService {
  public potentials: Promise<Potential[]>;

  private potentialUrl: string = 'app/potentials';

  private filterOptions: Object;

  constructor(private http: Http) {
    this.filterOptions = {
      "regions": [
        {
          "shortName": "nw",
          "enabled": false
        },
        {
          "shortName": "sw",
          "enabled": true
        },
        {
          "shortName": "ne",
          "enabled": true
        },
        {
          "shortName": "se",
          "enabled": true
        }
      ],
      "orderNames": [
        "Most Recent",
        "Most Popular",
        "Most Potential"
      ]
    }

    this.filterOptions["currentOrder"] = this.filterOptions["orderNames"][0];
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

  getOptions(): Object {
    return this.filterOptions;
  }

  getEnabled(): string[] {
    let enabledShortNames: string[] = [],
        enabled = _.filter(this.filterOptions["regions"], { "enabled": true })

    for (let i in enabled) {
      enabledShortNames.push(enabled[Object.keys(enabled)[i]]["shortName"]);
    }

    console.log(enabled, enabledShortNames);

    return enabledShortNames;
  }

  regionEnabledToggle(targetRegionShort: string): void {
    let _regions: Object[] = this.filterOptions["regions"];

    for (let i in _regions) {
      let _region = _regions[i];

      if ( _region["shortName"] === targetRegionShort ) {
        _region["enabled"] = !(_region["enabled"]);

        console.log(targetRegionShort, _region["enabled"]);
      }
    }

    console.log(this.filterOptions["regions"], "!!!!!!!!!", this.getEnabled())

  }

  getOrder(): string {
    let placeholder: string = "timestamp";
    
    return placeholder;
  }

  setOrder(newOrder): void {
    this.filterOptions["currentOrder"] = newOrder;
  }

  handleError() {
    console.log('err');
  }

}