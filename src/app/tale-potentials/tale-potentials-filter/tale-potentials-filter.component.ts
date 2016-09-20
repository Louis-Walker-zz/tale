import { Component } from '@angular/core';

import { FilterOptionsService } from '../../shared/services/filter-options.service';

@Component({
  selector: 'tale-potentials-filter',
  templateUrl: 'tale-potentials-filter.component.html',
  styleUrls: ['tale-potentials-filter.component.css'],
  providers: [FilterOptionsService]
})
export class PotentialsFilterComponent {
  private options: Object;

  constructor(private $f: FilterOptionsService) {
    this.options = $f.getOptions();
  }

  pushOrder(newOrder) {
    this.$f.setOrder(newOrder);
  }

}
