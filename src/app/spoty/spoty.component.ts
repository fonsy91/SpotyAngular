import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { any, result } from 'underscore';
import { ApiService } from './api.service';
import { Albums, Item } from './interfaces';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { timeout } from 'rxjs/operators';
import { typeofExpr } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-spoty',
  templateUrl: './spoty.component.html',
  styleUrls: ['./spoty.component.css']
})
export class SpotyComponent implements OnInit {

  //Array total devuelto por API
  albums_totales = [];
  //Array con los 20 arrays de cada temas y su informacion 
  albums20 = [];
  //nombres de los artistas 
  artistas = [];
  //ids de las canciones 
  ids = [];
 
  //[[album1],[album2]....]
  //array de string de todas las ids que nos devuelve la API 
  arrIDS: string[] = [];
  //Array de algunos string de id para probar funcionamiento 
  URLS: string[] = ['https://open.spotify.com/embed/album/0qfW7kihqHpsg0Seoj5ap0','https://open.spotify.com/embed/album/1lDMJQcBCttCroFPkNHtN7',
  'https://open.spotify.com/embed/album/76HLs4wSTOuCNwcGl4dycr','https://open.spotify.com/embed/album/4nProAxFavzKkbaRQ2Otyk']
  //Array de string de muchas urls que han pasado ya la seguridad y se pueden mostrar en el HTML 
  sanitizedVideos: SafeResourceUrl[];
  //variable sanitazer para el metodo cancionURL 
  sanitazer: DomSanitizer;
  //******************************************************************* */
  
  
  constructor(private _api: ApiService, private _http: HttpClient, sanitazer: DomSanitizer) { 
     
    //this.sanitizedVideos = this.arrIDS.map(videos => sanitazer.bypassSecurityTrustResourceUrl(videos));
    //console.log(this.sanitizedVideos);
    //console.log(this.arrIDS);
    this.mostrarIDS(sanitazer);
    this.canciones(sanitazer)
    
  }

  cancionURL(){
    //Este metodo sirve para pasar la seguridad para una sola url 
    return this.sanitazer.bypassSecurityTrustResourceUrl(this.arrIDS[3]);
    
     
  }

  ngOnInit(): void {
    this.MostrarArrays(); //mostramos el JSON por consola
    this.mostrarArtistas(); //mostramos las imagenes de los albunes en la Aplicacion 
    
  }

  //mostramos el array que contiene los 20 arrays de artistas e informacion adicional 
  MostrarArrays(){
    this._api.getItems().subscribe(albums => {
      this.albums_totales = albums;
      //accedemos hasta el album 0
      //De la interfaz solo obtenemos Items
      console.log(this.albums_totales['albums'].items);

    });
    
  }

  //mostramos el nombre de los 20 artistas por consola y guardamos todo el JSON en albums20
  mostrarArtistas(){
    this._api.getItems().subscribe(albums => {
      this.albums_totales = albums;
      this.albums20 = this.albums_totales['albums'].items;
      for(let i in this.albums20){
        //console.log(this.albums20[i].name)
        //this.artistas = this.albums20[i].name;
        //this.ids=this.albums20[i].id;
      }
    });
  }
  //Metodo donde almacenamos todas las ids en un array y despues pasamos la seguridad 
  mostrarIDS(sanitazer){
    this._api.getItems().subscribe(id =>{
      var urls;
      
      this.ids = id['albums'].items;
      //console.log(this.ids[0].id);
      for(let i in this.ids){
        //this.arrIDS =  this.ids[i].id;
        urls = "https://open.spotify.com/embed/album/"+this.ids[i].id;
        this.arrIDS.push(urls);
        
        //console.log(this.arrIDS);
        //console.log(urls);
      }
      //this.sanitizedVideos = this.arrIDS.map(videos => sanitazer.bypassSecurityTrustResourceUrl(videos));
      //console.log(this.arrIDS[0]);
      console.log(this.arrIDS);
    });
    
  }

  canciones(sanitazer){
    this.sanitizedVideos = this.URLS.map(videos => sanitazer.bypassSecurityTrustResourceUrl(videos));
    console.log(this.sanitizedVideos);
  }


  


}
