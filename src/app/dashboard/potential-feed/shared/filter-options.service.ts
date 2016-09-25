import { Injectable } from '@angular/core';

@Injectable()
export class FilterOptionsService {
  private filterOptions: any;

  constructor() { 
    this.filterOptions = {
      "regions": [
        {
          "shortName": "nw",
          "enabled": true
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

  getOptions(): Object {
    return this.filterOptions;
  }

  getEnabled(): string[] {
    let enabledShortNames: string[] = [],
        enabled = _.filter(this.filterOptions["regions"], { "enabled": true })

    for (let i in enabled) {
      enabledShortNames.push(enabled[Object.keys(enabled)[i]]["shortName"]);
    }

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

  }

  getOrder(): string {
    let placeholder: string = "timestamp";
    
    return placeholder;
  }

  setOrder(newOrder): void {
    this.filterOptions["currentOrder"] = newOrder;
  }
}
