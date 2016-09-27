import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { PotentialService } from '../shared/potential.service';

@Component({
  selector: 'potential-feed',
  templateUrl: 'potential-feed.component.html',
  styleUrls: ['potential-feed.component.css'],
  providers: [PotentialService]
})
export class PotentialFeedComponent implements OnInit {
  private potentialsArr;
  private enabledRegions: string[];
  private order: string;
  private showPotentials: boolean = true;

  constructor(
    private $p: PotentialService,
    private $c: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.enabledRegions = this.$p.getEnabled();
    this.order = this.$p.getOrder();

    this.$p.getPotentials()
      .then(potentials => this.potentialsArr = potentials);
  }

  updateFeed(region) {
    this.showPotentials = false;
    this.$c.detectChanges();

    let _enabled = this.enabledRegions;

    let enabledChecker = _.findIndex( _enabled, (r) => r == region );

    console.log(enabledChecker);

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
}
