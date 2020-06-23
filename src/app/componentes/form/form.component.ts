import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    private _builder: FormBuilder
  ) { 
    this.form-group=this._builder.group({
      nombre: ['', Validators.required],
      genero:['',Validators.required],
      apellidos:['', Validators.required],
      direccion:['', Validators.required],
      estado:['', Validators.required],
      correo:['', Validators.compose([Validators.email, Validators.required])],
      contrasenia:['', Validators.required]
    })
  }

  form-group: FormGroup

  ngOnInit(): void {
  }

  enviar(values){
    console.log(values);
  }

}
