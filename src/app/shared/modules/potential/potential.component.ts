import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {
  @Input() potential: any;

  private extended: boolean;

  constructor() {
  }

  ngOnInit(ext?) {
    // ext parameter evaluates if extended DOM tree should be loaded
    this.extended = ( typeof ext == "boolean" ) ? ext : false;
  }
}
