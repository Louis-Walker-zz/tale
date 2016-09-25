import { Component } from '@angular/core';

import { FilterOptionsService } from '../filter-options.service';
import { PotentialService } from '../../../shared/potential.service';

@Component({
  selector: 'tale-potential-filter',
  templateUrl: 'tale-potential-filter.component.html',
  styleUrls: ['tale-potential-filter.component.css'],
  providers: [FilterOptionsService]
})
export class PotentialFilterComponent {
  private options: Object;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService
    ) {
    this.options = $f.getOptions();
  }

  regionToggle(region): void {
    this.$f.regionEnabledToggle(region['shortName']);
    this.$p.reset();
  }
}
