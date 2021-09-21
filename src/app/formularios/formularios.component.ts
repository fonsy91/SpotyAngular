import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  signUpForm: FormGroup

  constructor(private _builder: FormBuilder) { 
    this.signUpForm = this._builder.group({
      nombre: [''] ,
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  //Funcion que recoge los valores del formulario
  enviar(values){
    console.log(values);
  }


}


