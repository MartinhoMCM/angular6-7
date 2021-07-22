import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Validacao } from '../validacao';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  dadosPessoais:FormGroup;
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.dadosPessoais.value);
  }

  constructor(private fb:FormBuilder) {
 
   }

  ngOnInit(): void {
    this.dadosPessoais =this.fb.group(
      {
       primeiroNome:['', Validators.required],
       ultimoNome: ['', Validators.required],
       email:['',[Validators.required,Validators.email] ,Validacao.validate ],
       endereco: this.fb.group({
         pais: [''],
         cidade: [''],
         municipio:[''],
         rua:[''],
       })
      }
     );
  }
  
  get f(){
    return this.dadosPessoais.controls;
  }
}
