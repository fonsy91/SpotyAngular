import { Injectable } from '@angular/core';
import { LoginResponse } from 'src/app/Others/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //Estas variables las usamos cuando el metodo post actua y coloca en estas declaraciones 
  //de variables los valores que el usuario a introducido 
  user:string;
  username: string;
  user2: LoginResponse;

}
