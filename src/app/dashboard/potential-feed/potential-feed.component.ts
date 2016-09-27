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

  updateFeed() {
    this.showPotentials = false;
    this.$c.detectChanges();

    this.enabledRegions = this.$p.getEnabled();

    setTimeout(() => {
      this.showPotentials = true;
      this.$c.detectChanges();
    }, 1);
  }
}
