import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista;
    //sino haremos un filtro de la lista 
    return lista.filter(user => user.name.toUpperCase().includes(texto.toUpperCase()));
  }

}



