import { Pipe, PipeTransform } from '@angular/core';
import {CardView} from './model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: CardView[], filterName: string): CardView[] {
    return filterName !== '' ? value.filter(({name}) => name.includes(filterName)) : value;
  }

}
