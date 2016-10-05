import { Component, Input, Output, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';
import { PotentialService } from '../shared/potential.service';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

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
  private showOpenAppeal: boolean = false;

  users: FirebaseObjectObservable<any[]>;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService,
    private $c: ChangeDetectorRef,
    private $a: AngularFire
    ) {

    this.users = $a.database.object("/users");
  }

  ngOnInit() {
    this.updateFilterOptions();

    this.$p.getPotentials()
      .then( ( potentials ) => this.potentialsArr = potentials );
  }

  toggleExtended(potential) {
    this.showExtended.emit(potential);
  }

  updateFeed() {
    this.updateFilterOptions();

    this.$c.detectChanges();
  }

  updateFilterOptions() {
    this.enabledRegions = this.$f.getEnabled();
    this.order = this.$f.getOrder();
  }

  openAppeal(potential) {
    this.showPotentials = !this.showPotentials;
    this.showOpenAppeal = !this.showOpenAppeal;
  }
}
