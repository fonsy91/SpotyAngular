import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from './hijo/hijo/hijo.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  //es como un qery selector o un getelementbyID pero para angular esto es para una etiqueta HTML de su propio 
  //componente 
  //@ViewChild('nombre',{static: true}) nombre: ElementRef

  //este es para un componente tambien se puede hacer referencia a servicios 
  @ViewChild(HijoComponent,{static: true}) hijo: HijoComponent;

  //variable para almacenar los usuarios de la API
  usuarios =[];

  //variable para la busqueda
  filtro_valor = ''; 

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.hijo);
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any[]) => this.usuarios=users);
  }

  //funcion cambiar titulo
  changeTitle(){
    this.hijo.titulo = 'Cmabio titulo componente hijo';
  }

  //funcion del buscador 
  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

}



