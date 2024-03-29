import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente/alta-cliente.component';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente/listado-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AltaClienteComponent,
    ListadoClienteComponent
  ],
  exports: [
    AltaClienteComponent,
    ListadoClienteComponent
  ],  
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }