import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { emptyPotential } from '../shared/modules/potential/empty-potential';

@Component({
  selector: 'tale-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private hidePotential: boolean;
  private potential: any;

  constructor(

  ) { }

  ngOnInit() {
    this.hidePotential = true;
    this.potential = emptyPotential;
  }

  showExtendedPotential(p) {
    this.hidePotential = !(this.hidePotential);
    this.potential = p;
  }

}
