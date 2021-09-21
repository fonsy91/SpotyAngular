import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, from, Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Component({
  selector: 'app-subject-observables',
  templateUrl: './subject-observables.component.html',
  styleUrls: ['./subject-observables.component.css']
})
export class SubjectObservablesComponent implements OnInit {

  //propiedad privada de tipo observable 
  numbers$: Observable<number> = interval(1000);

  //Array para hacer ejemplo de operadores
  myArray = [10,20,30];
  //Propiedad de tipo observable para los operadores 
  myArrayof$: Observable<any>;
  myArrayfrom$: Observable<any>;
  myArraytap$: Observable<any>;

  //Propiedad para subjects 
  subject = new Subject<number>();

  constructor() { }


  ngOnInit(): void {
    //Obtenemos por pantalla consola cada segundo lo siguiente: Result 0, Result 1 ....
    //nos subscribimos al observable (el que esta mirando) y despues mostramos con suscribe 
    //dichos valores en consola.
    //this.numbers$.subscribe(value => console.log('Result',value))

    //Operadores 
    //Queremos convertir myArray en un observable a partir del operador of()
    //this.myArrayof$ = of(this.myArray);
    //this.myArrayof$.subscribe(data => console.log('DataOf',data));
    //Para el operador from() realiza lo mismo que of pero con mas variaedad 

    //El operador tap permite recorrer sobre un iterable 
    //this.myArrayfrom$ = from(this.myArray);
    //this.myArrayfrom$.pipe(tap(data => console.log('DataTap', data))).subscribe(data => console.log('DataTap2', data));
    //el operador tap te permite iterar sobre un objeto iterable pero no te permite por ejemplo hacer operaciones 
    //con los datos que itera para ello utiliza el operador map
    //this.myArrayfrom$.pipe(map(data => data*2)).subscribe(data => console.log('DataMap2', data));

    this.subject.pipe(tap(val => console.log(val))).subscribe();
    this.subject.next(Math.random());
    this.subject.next(Math.random());

    //Subject al ser multicaste nos envia dos numeros aleatorios diferentes, en cambio con observables era unicast 
    //si nosotros duplicamos el codigo de tap el resultado seria el mismo 

  }

}
