import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //Componente hijo 
  //Decorador @Input user.component.ts
  @Input('data') user: any
  @Output() borrar = new EventEmitter<number>() 

 
  
  constructor() { }

  ngOnInit(): void {
  }

  //funcion que borra un usuario 
  BorrarUsuario(id: number){
    this.borrar.emit(id)
  }

}


