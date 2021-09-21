import { Component, OnInit } from '@angular/core';
import { Pelicula } from './Clases_Interfaces/CPelicula';
import { Cliente} from './Clases_Interfaces/ICliente'
@Component({
  selector: 'app-typscript',
  templateUrl: './typscript.component.html',
  styleUrls: ['./typscript.component.css']
})
export class TypscriptComponent implements OnInit {

  //declaracion de variables para tipo de datos 
  
  dato1: number = 28;
  dato2: number = 12.5;
  dato3: number = 0b110101;  //dato de tipo number en binario 
  dato4: number = 0o452;     //dato de tipo number octal
  dato5: number = 0xF42C;    //dato de tipo number hexadecimal
  str1: string = 'Alfonso';
  bool1: boolean = true;
  cualquierCosa:  any = "Lo que sea"  // puede albergar cualquier cosa 

  //Arrays declaracion dos formas, tambien se puede declarar por separado 
  frutas: string[] = ['Pera','Manzana','Naranja'];
  coches: Array<string> = ['Ford','Mercedes','Renaul'];
  vacio: [] = []  //array vacio 
  //arrays con elementos diferentes 
  val1: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
  val2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

  //Funciones en typscript 
  //funciones con nombre 
  foo1(msg: string) { console.log(msg); }
  //funcion anonima
  foo2 = function(x: number, y: number): number { return x+y; }
  //funcion lambda la flecha equivale al return 
  foo3 = (x: number, y: number) => x+y;

  //Para las CLASES e interfaces se crea un archivo a parte 
  //Array de instanciaciones de objetos de tipo pelicula 
  peliculas = [
    new Pelicula(1,"Vengadores","Stallin",2019),
    new Pelicula(2,"Malditos","Juaquin",2018),
    new Pelicula(3,"Mafalda","Sofia",1889)
  ]
  //pelicula independiente 
  pelicual1 = new Pelicula(1,"Doctor Strange","Juan",2020);
  
  //Para las Interfaces tambien lo hacemos en un archivo aparte 
  clientes: Cliente[] = [];
  cliente1: Cliente;

  
  
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.peliculas);
    for(let i in this.peliculas){
      console.log(this.peliculas[i].director);
    }

    //Parte de la Interfaz 
    this.cliente1 = this.clienteNuevo();
    console.log(this.cliente1);
    this.añadirCliente(this.cliente1);
    console.log(this.clientes);
    
  }


  //FUNCIONES DE ESTE APARTADO
  //metodo para añadir clientes
  clienteNuevo(): Cliente{
    return{
      nombre:'Alfonso',
      cif:'5077879',
      direccion:'Madera Alta',
      creado: new Date(Date.now())
    }
  }

  //añadir cliente 
  añadirCliente(cliente: Cliente){
    this.clientes.push(cliente);
  }


}