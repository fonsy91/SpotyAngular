import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/Others/interfaces';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //importamos un servicio que ya viene con angular
  constructor(private _http: HttpClient) { }

  api_url: string= 'https://jsonplaceholder.typicode.com/users'

  login(user: string, username: string): Observable<LoginResponse>{
    //ponemos un poco de encriptacion para la contraseña 
    //password = btoa(password)
    //Nos devuelve la respuesta del backend
    return this._http.post<LoginResponse>(`${this.api_url}`,{user: user, username: username})
  }

  //Pedmiso los datos a la API a traves de get 
  login2(){
    return this._http.get(`${this.api_url}`)
  }


}
