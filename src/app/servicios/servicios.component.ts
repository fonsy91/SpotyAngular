import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  //Aqui importamos el servicio de api y usuario creados con anterioridad 
  constructor(public _user: UserService, public _api: ApiService) { }

  ngOnInit(): void {
  }

  login(){
    const user = (document.querySelector('#usuario') as HTMLInputElement).value
    const username = (document.querySelector('#password')  as HTMLInputElement).value
    this._api.login(user, username).subscribe(response =>{
    
      this._user.user2=response
      console.log(this._user.user2)

    })//fin suscribe
  }

  //Los datos que vienen del servicio api.service los mostramos por consola 
  login2(){
    this._api.login2().subscribe(res =>{
      console.log(res)
    })
  }




}
