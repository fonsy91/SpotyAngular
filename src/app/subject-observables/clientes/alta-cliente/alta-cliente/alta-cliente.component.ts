import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../../cliente.model';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  //variables de tipo Cliente y Grupo 
  cliente: Cliente;
  grupos: Grupo[];


  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }

  //Funcion que crea un nuevo cliente 
  nuevoCliente(): void{
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}




