import { Pipe, PipeTransform } from '@angular/core';
import { FilterObject } from '../models/product';

@Pipe({
    name: 'itemFilter',
    pure: false
})
export class ItemFilterPipe implements PipeTransform {
    transform(items: any[], filter: FilterObject): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        // return items.filter(item => item.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 && filter.price && item.price == filter.price);
        if (filter.price > 0) {
            return items.filter(item => item.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1 && item.price == filter.price);
        } else {
            return items.filter(item => item.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1);
        }
    }
}