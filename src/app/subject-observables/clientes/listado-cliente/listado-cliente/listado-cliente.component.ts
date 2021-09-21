import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../cliente.model';
import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente$: Observable<Cliente[]>;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cliente$ = this.clientesService.getClientes$();
    this.cliente$.subscribe(clientes => this.clientes = clientes);
  }

}
