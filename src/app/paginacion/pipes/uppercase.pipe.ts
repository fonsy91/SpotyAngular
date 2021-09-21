import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    //si no existe valor no devuelve nada 
    if(!value) return '';
    return value.toUpperCase();
  }

  /*
  <div>{{ lista[0].nombre | uppercase}}</div>
  El 1º parametro de transform es lista[0].nombre y despues ya 
  son parametros que se pasan con dos puntos 
  */

}
