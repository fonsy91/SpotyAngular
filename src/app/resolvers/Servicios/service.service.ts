import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   token = "BQB4b0MH7-c3Xu-byuYC0v8ZY0HErJNoR5Ng-p3VxTZh2T60chNqnR7dZ8jtAUJNFWgAHRYaP9PHfLHaStHFuDHAMaQ2zWZZeWo9Vs1RW57S5ZrrmcZcJOX9me4kZyHNxDT2RC3lnnJP3UCJ8n6LOEGJXW81484";

  constructor(private _http: HttpClient) { 

  }

  //funcion que devuelve los headers 
  spotifyHeaders(){
    return{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    }
  }

  //MIRAR BIEN ESTO 
  searchSongs(name): Observable<any>{
    return this._http.get(`https://api.spotify.com/v1/search?q=${name}&type=track`,{
      headers: this.spotifyHeaders()
    })
  }

  getSong(id: string): Observable<any>{
    return this._http.get(`https://api.spotify.com/v1/tracks/${id}`,{
      headers: this.spotifyHeaders()
    }).pipe(delay(3000))
  }


}
