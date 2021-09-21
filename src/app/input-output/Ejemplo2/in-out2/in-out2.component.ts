import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-out2',
  templateUrl: './in-out2.component.html',
  styleUrls: ['./in-out2.component.css']
})
export class InOut2Component implements OnInit {

//.ts del Componente Hijo Aqui se declaran los @Input y @Output
//Aqui recibe desde el padre un mensaje que se guarda en la variable texto despues el contenido de 
//la misma se envia al html del propio hijo para poder visualizarlo en pantalla
@Input() texto: string;
//Lo usamos para poder enviar informacion al padre a traves de un metodo en este caso enviarPadre con emit
@Output() eventoHijo = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  //cuando se aprtiee el boton el hijo mediante este metodo enviarla informacion al padre
  enviarPadre(){
    this.eventoHijo.emit("evento Hijo!!!")
  }


}


