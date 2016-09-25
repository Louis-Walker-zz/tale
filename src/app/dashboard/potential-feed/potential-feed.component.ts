import { Component, OnInit } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';
import { PotentialService } from '../shared/potential.service';

@Component({
  selector: 'potential-feed',
  templateUrl: 'potential-feed.component.html',
  styleUrls: ['potential-feed.component.css'],
  providers: [FilterOptionsService, PotentialService]
})
export class PotentialFeedComponent {
  private potentialsData;
  private enabledRegions: string[];
  private order: string;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService) {
    this.enabledRegions = $f.getEnabled();
    this.order = $f.getOrder();
  }

  ngOnInit() {
    this.potentialsData = this.$p.getPotentials();
  }
}
