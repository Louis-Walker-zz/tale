import { Injectable } from '@angular/core';

@Injectable()
export class FilterOptionsService {
  private filterOptions: any;

  constructor() { 
    this.filterOptions = {
      "regions": {
        "northWest": {
          "shortName": "nw",
          "enabled": true
        },
        "southWest": {
          "shortName": "sw",
          "enabled": true
        },
        "northEast": {
          "shortName": "ne",
          "enabled": true
        },
        "southEast": {
          "shortName": "se",
          "enabled": true
        }
      },
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
        enabled = _.filter(this.filterOptions["regions"], {"enabled": true})

    for (let i in enabled) {
      enabledShortNames.push(enabled[Object.keys(enabled)[i]]["shortName"]);
    }

    return enabledShortNames;
  }

  getOrder(): string {
    let placeholder: string = "timestamp";
    
    return placeholder;
  }

  setOrder(newOrder): void {
    this.filterOptions["currentOrder"] = newOrder;
  }

  regionEnabledToggle(targetRegionShort: string): void {
    let _regions = this.filterOptions["regions"];

    for (let region in _regions) {
      let _region = _regions[region];

      if ( _region["shortName"] === targetRegionShort ) {
        _region["enabled"] = !(_region["enabled"]);
      }
    }
  }
}
