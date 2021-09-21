import { Component, OnInit } from '@angular/core';
import { map, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-atributos-eventos-ng-model',
  templateUrl: './atributos-eventos-ng-model.component.html',
  styleUrls: ['./atributos-eventos-ng-model.component.css']
})
export class AtributosEventosNgModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.capturarInput();

  }

  desactivado = false; 
  tipo = 'submit';



  //para el ngModule
  titulo: string = '';
  titulo2: string ="Macarrones";
  titulo3:  string = '';


  PonerTitulo(){
    this.titulo=this.titulo;
    console.log(this.titulo)
  }

  capturarInput(){
    const comida = document.getElementById('comida');
    const keyup = fromEvent(comida, 'keyup');
    keyup.pipe(
      map((e: any) => e.currentTarget.value), debounceTime(1000)
    ).subscribe(console.log);
  }

  log(titulo3){
    console.log(titulo3);
     
  }
  
  
  



}
