import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrderPipe implements PipeTransform {
  private orderedPotentials: Object[] = [];

  transform( value: Object[], order: string ): Object[] {
    return _.orderBy( value, order, "desc" );
  }
}
