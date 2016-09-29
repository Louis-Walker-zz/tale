import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  private filteredPotentials: Object[] = [];

  transform( 
    value: Object[],
    params: any[]
    ): Object[] {

    let _enabledRegions = params[0];
    let _order = params[1];
    
    let _filtered = this.filteredPotentials;

    // Filter out non-enabled regions
    let _enabled: Object[] = [];

    for ( let region in _enabledRegions ) {
      _enabled.push( ..._.filter( value, { "region": _enabledRegions[region] } ) );
    }

    // Re-order according to order option provided by FilterOptionService
    _filtered = _.orderBy( _enabled, _order, "desc" );

    return _filtered;
  }
}
