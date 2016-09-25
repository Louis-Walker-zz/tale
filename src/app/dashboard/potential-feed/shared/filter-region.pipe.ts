import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegion',
  pure: false
})
export class FilterRegionPipe implements PipeTransform {
  private filteredPotentials: Object[] = [];

  transform( 
    value: Object[],
    enabled: string[]
    ): Object[] {
    let _filtered = this.filteredPotentials;

    for ( let e in enabled ) {
      _filtered.push( ..._.filter( value, { "region": enabled[e] } ) );
    }

    return _filtered;
  }

}
