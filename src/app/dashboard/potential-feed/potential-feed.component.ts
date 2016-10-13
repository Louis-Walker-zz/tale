declare var require: any;

import { Component, Input, Output, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';
import { PotentialService } from '../shared/potential.service';

import { AngularFire } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'potential-feed',
  templateUrl: 'potential-feed.component.html',
  styleUrls: ['potential-feed.component.css'],
  providers: [FilterOptionsService, PotentialService]
})
export class PotentialFeedComponent implements OnInit {
  @Output() showExtended = new EventEmitter<number>();

  private potentialsArr: Observable<any>;
  private enabledRegions: string[];
  private order: string;
  private showPotentials: boolean = false;
  private showOpenAppeal: boolean = false;

  constructor(
    private $f: FilterOptionsService,
    private $p: PotentialService,
    private $c: ChangeDetectorRef,
    private $af: AngularFire
    ) {
  }

  ngOnInit() {
    this.updateFilterOptions();

    this.$p.getPotentials( this.$f.getEnabled() )
      .subscribe( potentials => { 
        console.log(potentials);
        this.potentialsArr = potentials;
        this.showPotentials = true;
      });
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
