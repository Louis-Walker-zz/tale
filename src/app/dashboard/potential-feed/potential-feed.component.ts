import { Component, Output, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';
import { PotentialService } from '../shared/potential.service';

@Component({
  selector: 'potential-feed',
  templateUrl: 'potential-feed.component.html',
  styleUrls: ['potential-feed.component.css'],
  providers: [FilterOptionsService, PotentialService]
})
export class PotentialFeedComponent implements OnInit {
  @Output() showExtended = new EventEmitter<number>();

  private potentialsArr;
  private enabledRegions: string[];
  private order: string;
  private showPotentials: boolean = true;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService,
    private $c: ChangeDetectorRef
    ) {
  }

  ngOnInit() {
    this.updateFilterOptions();

    this.$p.getPotentials()
      .then( (potentials) => this.potentialsArr = potentials );
  }

  toggleExtended(potential) {
    this.showExtended.emit(potential);
  }

  updateFeed(region) {
    this.showPotentials = false;
    this.$c.detectChanges();

    this.updateFilterOptions();

    setTimeout(() => {
      this.showPotentials = true;
      this.$c.detectChanges();
    }, 1);
  }

  updateFilterOptions() {
    this.enabledRegions = this.$f.getEnabled();
    this.order = this.$f.getOrder();
  }
}
