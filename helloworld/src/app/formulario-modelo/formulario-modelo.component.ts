import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-formulario-modelo',
  templateUrl: './formulario-modelo.component.html',
  styleUrls: ['./formulario-modelo.component.css']
})
export class FormularioModeloComponent implements OnInit {

  pessoa:Pessoa =new Pessoa(1, 'Martin',24,'M' , '');
  enviado=false;
  

  constructor() {
  
   }

 
  ngOnInit(): void {
  }
  onSubmit():void{
    this.enviado=true;
  }

  novaPessoa():void{
    this.pessoa=new Pessoa(1, 'Djamila', 23, 'Femenino','')
  }


}
