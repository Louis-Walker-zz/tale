import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterableObservable'
})
export class MapToIterablePipe implements PipeTransform {

  transform( value: any, args?: any ): any[] {
    let _subbed = () => {
      if ( typeof value == "Observable" ) {
        return true;
      } else {
        return false;
      }
    }

    if ( _subbed && value === null || undefined ) {

    } else if ( _subbed && value !== null || undefined ) {
      return this.mapObject(value);

    } else {
      return this.mapObject(value);
    }
  }

  mapObject( value ): any[] {
    return Object.keys(value).map(key => value[key]);
  }

}
