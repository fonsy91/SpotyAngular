import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//importacion de req-res.ts donde se alberga el modelo de el Json en la carpeta Models 
import { UsuarioResponse } from './Models/req-res';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  //Array de Usuarios
  public usuarios: any = [];

  //Vamos a importar el componente como servicio mediante inyeccion de dependencias 
  // en el constructor de esta clase principal 

 constructor(private _http: HttpClient){

 }


  ngOnInit(): void {
    this.getUsuarios();
   
  }

  //Metodo para obtener los usuarios del Json Hce de servicio 
  public getUsuarios(){
       this._http.get<UsuarioResponse>('https://jsonplaceholder.typicode.com/users')
        .subscribe((response) =>{
          //console.log(response);
          this.usuarios = response;
        });
  }

  //Video: https://www.youtube.com/watch?v=CDFfKqjsBUc




}



