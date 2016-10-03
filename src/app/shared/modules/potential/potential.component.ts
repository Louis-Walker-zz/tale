import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'potential',
  templateUrl: './potential.component.html',
  styleUrls: ['./potential.component.css']
})
export class PotentialComponent implements OnInit {
  @Input() potential: any;
  @Input() extended: boolean;

  @Output() openAppealEvent = new EventEmitter<any>();

  private showOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // ext parameter evaluates if extended DOM tree should be loaded
    let _ext = this.extended;

    _ext = ( typeof _ext == "boolean" ) ? _ext : false;
  }

  toggleOpen(): void {
    this.showOpen = !this.showOpen;
  }

  openAppeal() {
    this.openAppealEvent.emit(this.potential);
  }
}
