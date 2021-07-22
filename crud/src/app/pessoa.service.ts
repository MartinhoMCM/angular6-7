import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url="http://localhost:3000/pessoa";
  private postUrl="http://localhost:3000/pessoa/posts";

  constructor(private http:HttpClient) { }

  recuperarPessoa():Observable<Pessoa[]>{

    return this.http.get<Pessoa[]>(this.url);

  }
  adicionarPessoa(pessoa:Pessoa):Observable<Pessoa>{
    
    return this.http.post<Pessoa>(this.url,pessoa);
  }
  editarPessoa(pessoa:Pessoa):Observable<Pessoa>{
    return this.http.put<Pessoa>(this.url+'/'+pessoa.id, pessoa);
  }

  deletarPessoa(id:number):Observable<void>{
    return this.http.delete<void>(this.url+'/'+id);
  }
}
