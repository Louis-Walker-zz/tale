import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegion'
})
export class FilterRegionPipe implements PipeTransform {

  transform( value: Object, args?: any ): Object {
    let _keys: string[] = Object.keys( value );
    let _regions: string[] = args ? Object.keys( args[0] ) : ["e"]; // Remove ternary when filterService is created

    let enabledRegions: any[];
    let filteredPotentials: Object;

    for ( let k in _keys ) {
      if ( value[_keys[k]].enabled === true ) {
        enabledRegions.push( _keys[k] );
      }
    }

    for ( let v in value ) {
      for ( let r in enabledRegions ) {
        if ( enabledRegions[r] === Object.keys( value )[v]["enabled"] ) {
          filteredPotentials[Object.keys( filteredPotentials ).length - 1] = Object.keys( value )[v];
        }
      }
    }

    return filteredPotentials ? filteredPotentials : value; // Replace value with user friendly message when filterService is created
  }

}
