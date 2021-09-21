import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Array<any>, reverse: boolean): Array<any> {
    if(!value) return [];
    if(reverse){
      return _.sortBy(value, function(pelicula){return pelicula.nombre;}).reverse();
    }else{
      return _.sortBy(value, function(pelicula){return pelicula.nombre;});
    }
  }

}


