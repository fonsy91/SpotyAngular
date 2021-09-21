
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'AngularTypscript';
  usuarios =[]


  constructor(private _http: HttpClient ){
    
  }

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe((users: any[]) => this.usuarios=users)
  }


  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

}

//Typscript del componente principal que se crea por defecto 



