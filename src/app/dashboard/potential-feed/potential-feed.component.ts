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

  constructor(
    private $p: PotentialService,
    private ref: ChangeDetectorRef ) {

    this.enabledRegions = $p.getEnabled();
    this.order = $p.getOrder();
  }

  ngOnInit() {
    this.$p.getPotentials()
      .then(potentials => this.potentialsArr = potentials);
  }

  updateFeed(region) {
    this.enabledRegions = ["nw"];
    this.ref.detectChanges();
  }
}
