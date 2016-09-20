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
    let placeholder: string[] = ["sw", "nw"];
    
    return placeholder;
  }

  getOrder(): string {
    let placeholder: string = "timestamp";
    
    return placeholder;
  }

  setOrder(newOrder): any {
    this.filterOptions["currentOrder"] = newOrder;
  }
}
