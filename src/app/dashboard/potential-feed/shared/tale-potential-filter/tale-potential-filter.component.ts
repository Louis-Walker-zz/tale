import { Component, EventEmitter, Output } from '@angular/core';

import { PotentialService } from '../../../shared/potential.service';

@Component({
  selector: 'tale-potential-filter',
  templateUrl: 'tale-potential-filter.component.html',
  styleUrls: ['tale-potential-filter.component.css'],
  providers: [PotentialService]
})
export class PotentialFilterComponent {
  @Output() updateFeed = new EventEmitter<string>();

  private options: Object;

  constructor(
    private $p: PotentialService
    ) {
    this.options = $p.getOptions();
  }

  regionToggle(region): void {
    let _shortName = region['shortName'];

    this.$p.regionEnabledToggle(_shortName);

    this.updateFeed.emit(_shortName);
  }
}
