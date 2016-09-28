import { Component, EventEmitter, Output } from '@angular/core';

import { FilterOptionsService } from '../filter-options.service';
import { PotentialService } from '../../../shared/potential.service';

@Component({
  selector: 'tale-potential-filter',
  templateUrl: 'tale-potential-filter.component.html',
  styleUrls: ['tale-potential-filter.component.css'],
  providers: [FilterOptionsService, PotentialService]
})
export class PotentialFilterComponent {
  @Output() updateFeed = new EventEmitter<string>();

  private options: Object;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService
    ) {
    this.options = $f.getOptions();
  }

  regionToggle(region): void {
    let _shortName = region['shortName'];

    this.$f.regionEnabledToggle(_shortName);

    this.updateFeed.emit(_shortName);
  }
}
