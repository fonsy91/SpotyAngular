import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnChanges{

  datos=[
    {marca: 'Volvo', value: 10},
    {marca: 'Volvo', value: 20},
    {marca: 'Toyota', value: 30},
    {marca: 'Toyota', value: 40},
    {marca: 'Mercedes', value: 50},
    {marca: 'Mercedes', value: 60},
    {marca: 'Renault', value: 70},
    {marca: 'Renault', value: 80}
  ]

  ngOnChanges(changes: SimpleChanges){
    //si el valor a cambiado realmente 
    if(changes.marca.currentValue != changes.marca.previousValue){
      const nuevaMarca = changes.marca.currentValue;
      const datos = this.datos.filter(dato => dato.marca == nuevaMarca);
      console.log(datos);
      this.total= 0;
      datos.forEach(dato =>this.total += dato.value);
    }
  }

  @Input() marca : string;

  total: number = 0; 

}
