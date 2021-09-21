import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { Observable, Subject } from 'rxjs';
//En este servicio concentramos toda la logica de la aplicacion 

@Injectable()
export class ClientesService {

    private clientes: Cliente[];
    private grupos: Grupo[];
    //Creamos un subjet, vamos a observar el array de clientes 
    //es el encargado de generar y emitir los eventos de actualización del almacén de datos.
    private clientes$ = new Subject<Cliente[]>();

    constructor(){
        this.grupos=[
            {
                id: 0,
                nombre: 'Sin definir'
            },
            {
                id: 1,
                nombre: 'Activos'
            },
            {
                id: 2,
                nombre: 'Inactivos'
            },
            {
                id: 3,
                nombre: 'Deudores'
            },
        ];

        this.clientes = [];
    }

    //METODOS
    //Metodo para obtener los grupos
    getGrupos(){
        return this.grupos;
    }
    //metodo para obtener los clientes
    // Este método ya no lo usaré
    // Ya que nadie va a usar el array de clientes directamente
    // En vez de ello, usaremos el observable.
    //getClientes(){
    //    return this.clientes;
    //}

    getClientes$(): Observable<Cliente[]>{
        return this.clientes$.asObservable();
    }

    //metodo agregar a la lista de clientes 
    agregarCliente(cliente: Cliente){
        this.clientes.push(cliente);
        //emitimos un evento usando el subject
        this.clientes$.next(this.clientes);
    }
    //metodo para crear un nuevo cliente 
    nuevoCliente(): Cliente{
        return{
            id: this.clientes.length,
            nombre: '',
            cif: '',
            direccion: '',
            grupo: 0
        };
    }



}

