import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tale-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private showPotential: boolean;
  private potential: any;

  constructor() { }

  ngOnInit() {
    this.showPotential = false;
  }

  showExtendedPotential(p) {
    this.showPotential = !(this.showPotential);
    this.potential = p;
    console.log(p);
  }

}
