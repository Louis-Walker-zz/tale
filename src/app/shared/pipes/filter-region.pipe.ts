import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegion'
})
export class FilterRegionPipe implements PipeTransform {
  private enabledRegions: string[];
  private filteredPotentials: Object[] = [];

  transform( value: Object[], args?: any ): Object[] {
    let _keys = Object.keys( value ),
        _enabled = args,
        _filtered = this.filteredPotentials;

    for ( let e in _enabled ) {
      _filtered.push( ..._.filter( value, { "region": _enabled[e] } ) );
    }

    return _filtered;
  }

}
