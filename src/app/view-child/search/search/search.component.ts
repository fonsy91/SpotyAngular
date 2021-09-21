import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado en el formulario
  search = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    //despues con search de FromControl evaluamos los cambio y nos suscribimos obteniendo el valor que se emite o se 
    //escribe en el input del buscador ademas hacemos que angular espere 300 milisegundos hasta que lo procesa 
    this.search.valueChanges.pipe(debounceTime(300)).subscribe(value => this.searchEmitter.emit(value))
  }

  //en el search del input del html todo lo que introduzcamos lo guardamos en la variable searchEitter con el 
  //EventEmitter que es un objeto que permite emitir un evento en este caso de tipo string 
  @Output('search') searchEmitter = new EventEmitter<string>();

}

