import { Component } from '@angular/core';

@Component({
  selector: 'tale-potentials-filter',
  templateUrl: 'tale-potentials-filter.component.html',
  styleUrls: ['tale-potentials-filter.component.css']
})
export class PotentialsFilterComponent {
  filterOptions: Object;

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
        },
      },
      "orderNames": [
        "Most Recent",
        "Most Popular",
        "Most Potential"
      ]
    }

    this.filterOptions["currentOrder"] = this.filterOptions["orderNames"][0];
  }

  setOrder(name) {
    let options = this.filterOptions;

    options["currentOrder"] = name;
  }

}
