import { Component } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';

@Component({
  selector: 'tale-potential-feed',
  templateUrl: 'potential-feed.component.html',
  styleUrls: ['potential-feed.component.css'],
  providers: [FilterOptionsService]
})
export class PotentialFeedComponent {
  private potentials: Object;
  private enabledRegions: string[];
  private order: string;

  constructor(
    private $f: FilterOptionsService
    ) {
    this.enabledRegions = $f.getEnabled();
    this.order = $f.getOrder();

    this.potentials = 'mockPotentials';
  }

}
