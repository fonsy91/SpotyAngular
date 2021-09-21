import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {



  usuarios = []

  //Para poder accedr a la pagina importamos el HTTPCLient
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((datos: any[])=>this.usuarios = datos)
  }

  borrarUsuario(id: number){
    this.usuarios = this.usuarios.filter(usuario => usuario.id != id)
  }

  //variable a mostrar en el componnete padre
  mensajeHijo: string

  //funcion que recibe el mesaje del hijo y la muestra por pantalla en el padre 
  onMensajeHijo(mensaje){
    this.mensajeHijo = mensaje;
  }

}



