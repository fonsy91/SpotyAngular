import { Component, OnInit } from '@angular/core';
import { ServicioService } from './servicio/servicio.service'; 
import { User } from './interface/interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  datos: User[] = [];
  page_size: number = 5;
  page_number: number = 1;
  pageSizeOptions = [3,5,10,20,50]

  //Seccion de la zona PIPE 
  //Array o lista de objetos 
  lista =[
    {id: 1, nombre: 'Green Book', precio: 6.80},
    {id: 2, nombre: 'Ira de Titanes', precio: 4.20},
    {id: 3, nombre: 'Gladiator', precio: 5.60},
    {id: 4, nombre: 'Spiderman', precio: 7.80},
    {id: 5, nombre: 'Vengadores', precio: 8.00},
    {id: 6, nombre: 'Doctor Streange', precio: 6.00},
    {id: 7, nombre: 'Coco', precio: 6.30},
    {id: 8, nombre: 'Brave', precio: 7.00}
  ]

  constructor(private api: ServicioService) { }

  ngOnInit(): void {
    //llamamos al metodo que esta en el servicio getLista y nos subscribimos 
    this.api.getLista().subscribe(datos => this.datos = datos);
  }

  //Funcion 
  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex+1;
  }

}


