declare var require: any;

import { Component, Input, Output, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

import { FilterOptionsService } from './shared/filter-options.service';
import { PotentialService } from '../shared/potential.service';

import { AngularFire } from 'angularfire2';

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
      .subscribe( ( potentials ) => { 
        if ( potentials["$value"] !== null ) {
          let _keys = Object.keys( potentials );

          for ( let pid of _keys ) {
            let _potential = potentials[pid];
            
            if ( pid !== "$key" ) {
              _potential["lead"] = this.$p.getLead( _potential["_lid"] );
            }
          }
        }

        this.potentialsArr = potentials;
        console.log(this.potentialsArr);
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
