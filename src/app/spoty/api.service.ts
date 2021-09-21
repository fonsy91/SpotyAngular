import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { any, map } from 'underscore';
import { Albums, Artist, Item } from './interfaces';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  
  //de donde sacamos la play list de Spotify
  //https://developer.spotify.com/console/get-new-releases/?country=&limit=&offset=

  //Segudo metodo 
  token2 = 'BQB0yw-l9w6GIhBmmGICLTn7FMZ86pzdoyAfn62aPkuDzLCDsjDU7yBUFn2wWUKON1khdxcxUAjkSbUo6V_YVwq-yncXnpIxT4VJp2mAME3Abvbj2e8EymxyLv4jWUhWnvA5XksAhoFK2hPuBAlCEctMPfDZ7gY';

  getSong(){
    return this._http.get('https://api.spotify.com/v1/browse/new-releases',{
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token2}`
      }
    })
  }

  //filtramos con pipe y map 
  //.pipe(map((val: Array) => val.items))
  getItems(): Observable<Item[]>{
    //return this.getSong().pipe(map(data => {return data.items}));
    return this._http.get<Item[]>('https://api.spotify.com/v1/browse/new-releases',{
      headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.token2}`
      }
    })
  }


}
