import { Component } from '@angular/core';

import { FilterOptionsService } from '../shared/filter-options.service';

@Component({
  selector: 'tale-potential-filter',
  templateUrl: 'tale-potential-filter.component.html',
  styleUrls: ['tale-potential-filter.component.css'],
  providers: [FilterOptionsService]
})
export class PotentialFilterComponent {
  private options: Object;

  constructor(
    private $f: FilterOptionsService
    ) {
    this.options = $f.getOptions();
  }

  regionToggle(region): void {
    this.$f.regionEnabledToggle(region['shortName']);
  }
}
