import { Component } from '@angular/core';
import { FilterOptionsService } from '../shared/services/filter-options.service';

import { mockPotentials } from '../shared/mockData/mock-potentials';

@Component({
  selector: 'tale-potentials',
  templateUrl: 'tale-potentials.component.html',
  styleUrls: ['tale-potentials.component.css'],
  providers: [FilterOptionsService]
})
export class PotentialsComponent {
  private potentials: Object;
  private enabledRegions: string[];

  constructor(private $f: FilterOptionsService) {
    this.enabledRegions = $f.getEnabled();
    this.potentials = mockPotentials;
  }

}
