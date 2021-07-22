import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() {
    
   }

   recuperarPessoaLista():Array<Pessoa>{

    let pessoaLista:Array<Pessoa> =[];
    pessoaLista.push(new Pessoa(1, 'Logic', 23, 'Masculino', 'logic@gmail.com'));
    pessoaLista.push(new Pessoa(1, 'Alright', 23, 'None', 'alright@gmail.com'));

    return pessoaLista;
   }
}
