import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo-aninhado',
  templateUrl: './formulario-reativo-aninhado.component.html',
  styleUrls: ['./formulario-reativo-aninhado.component.css']
})
export class FormularioReativoAninhadoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  
  }

  dadosPessoais =new FormGroup(
   {
    primeiroNome:new FormControl(''),
    ultimoNome: new FormControl(''),
    endereco: new FormGroup({
      pais: new FormControl(''),
      cidade: new FormControl(''),
      municipio: new FormControl(''),
      rua: new FormControl(''),
    })
   }
  );

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.dadosPessoais.value);
  }



}
