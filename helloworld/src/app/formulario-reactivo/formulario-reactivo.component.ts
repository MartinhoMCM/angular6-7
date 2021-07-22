import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  constructor() { }

  pessoaForm=new FormGroup(
  {
    primeiroNome:new FormControl(''),
    ultimoNome:new FormControl('')
  }
  )
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.pessoaForm.value);
}

  ngOnInit(): void {
  }

}
