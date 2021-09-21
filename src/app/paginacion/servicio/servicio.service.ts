import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getLista(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/todos');
  }


}
