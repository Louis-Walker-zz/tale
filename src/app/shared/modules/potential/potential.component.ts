import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {
  @Input() potential: any;

  constructor() {
  }

  ngOnInit() {

  }

}
