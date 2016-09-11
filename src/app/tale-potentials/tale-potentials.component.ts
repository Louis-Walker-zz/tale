import { Component } from '@angular/core';
import { PotentialsFilterComponent } from './tale-potentials-filter';

@Component({
  moduleId: module.id,
  selector: 'tale-potentials',
  templateUrl: 'tale-potentials.component.html',
  styleUrls: ['tale-potentials.component.css'],
  directives: [PotentialsFilterComponent]
})
export class PotentialsComponent {

  constructor() { }

}
