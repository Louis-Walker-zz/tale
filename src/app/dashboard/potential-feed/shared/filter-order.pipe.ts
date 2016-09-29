import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrder',
  pure: false
})
export class FilterOrderPipe implements PipeTransform {
  private orderedPotentials: Object[] = [];

  transform( 
    value: Object[], 
    order: string 
    ): Object[] {

    let newArr: Object[] = [];

    console.log("fired order");

    let orderedArr = _.orderBy( value, order, "desc" );

    console.log("?", orderedArr);

    for ( let item in orderedArr ) {
      newArr.push( item );

      console.log("!", item);
    }

    return newArr;
  }
}
