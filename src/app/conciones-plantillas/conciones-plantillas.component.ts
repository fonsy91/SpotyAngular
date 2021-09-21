import { Component, OnInit } from '@angular/core';
import { Usuario, TipoUsuario } from './interfaces';

@Component({
  selector: 'app-conciones-plantillas',
  templateUrl: './conciones-plantillas.component.html',
  styleUrls: ['./conciones-plantillas.component.css']
})
export class ConcionesPlantillasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //variables 
  islogged: boolean = false; 
  nivel: number = 5;

  //Declaramos un Objeto de tipo usuario creada previamente la interfaz con su estructura 
  //casteamos el usuario alfonso
  user: Usuario= {
    ID: 23,
    Nombre: "Alfonso",
    Apellidos: "Muñoz Casado",
    Nick: "Fonsy",
    Email: "alfonso91fp@gmail.com",
    Contrasena: "1234",
    Tipo: TipoUsuario.Administrador
  }
  
  dataUno = Object.values(this.user)
  
  //O tambien creamos un array de usuarios 
  userUno: Usuario[]=[
    {
      ID: 23,
      Nombre: "Alfonso",
      Apellidos: "Muñoz Casado",
      Nick: "Fonsy",
      Email: "alfonso91fp@gmail.com",
      Contrasena: "1234",
      Tipo: TipoUsuario.Administrador
    },
    {
      ID: 24,
      Nombre: "Juan",
      Apellidos: "Muñoz Casado",
      Nick: "Juanito",
      Email: "Juan@gmail.com",
      Contrasena: "1234",
      Tipo: TipoUsuario.Cliente
    }

  ]

  data =Object.values(this.userUno)

  mostrar() {
    this.user.Nombre
  }
  






}
