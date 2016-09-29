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

  private potentialsArr: Object[];
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
    this.enabledRegions = this.$f.getEnabled();
    this.order = this.$f.getOrder();

    this.potentialsArr = this.$p.getPotentials();
  }

  toggleExtended(potential) {
    this.showExtended.emit(potential);
  }

/* Shouldn't be required once CD bug is fixed
  updateFeed(region) {
    this.showPotentials = false;
    this.$c.detectChanges();

    let _enabled = this.enabledRegions;

    let enabledChecker = _.findIndex( _enabled, (r) => r == region );

    if ( enabledChecker === -1 ) {
      _enabled.push(region);
    } else {
      _enabled = _.remove( _enabled, (r) => r == region);
    };

    setTimeout(() => {
      this.showPotentials = true;
      this.$c.detectChanges();
    }, 1);
  }
*/
}
