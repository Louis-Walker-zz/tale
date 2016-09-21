import { Pipe, PipeTransform } from '@angular/core';

import { FilterRegionPipe } from './filter-region.pipe';

@Pipe({
  name: 'filterRegionImpure',
  pure: false
})
export class FilterRegionImpurePipe extends FilterRegionPipe {}
