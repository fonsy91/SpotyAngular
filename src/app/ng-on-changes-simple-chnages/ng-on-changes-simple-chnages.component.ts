import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes-simple-chnages',
  templateUrl: './ng-on-changes-simple-chnages.component.html',
  styleUrls: ['./ng-on-changes-simple-chnages.component.css']
})
export class NgOnChangesSimpleChnagesComponent  {

  marcaSeleccionada: string = 'Volvo';
  marcas: string[] = ['Volvo','Toyota','Mercedes','Renault'];

}


