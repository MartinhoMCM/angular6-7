import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';

  pessoas: Array<Pessoa>=[];
  pessoa:Pessoa;
  isFormVisible:boolean=false;
  isEditar:boolean=false;

  constructor(private pessoaService:PessoaService){
    
  }

  ngOnInit():void{
    this.pessoaService.recuperarPessoa().subscribe(
      data=>{
        this.pessoas=data,
        this.pessoa=new Pessoa('',-1, '','');

      },
      error=>console.log("error ", error)
      
    );
  }

  addPessoa(){
    this.isFormVisible=true;
  }
  savePessoa():void{
    this.isFormVisible=false;
    if(!this.isEditar){
    
    this.pessoaService.adicionarPessoa(this.pessoa).subscribe(
      data=> this.pessoas.push(data),
      error=>console.log("erro ", error)
      
    );
  }
  else{
    console.log("editar");
    
    this.saveEditarPessoa()
  }
  }

  fillinputEdit(pessoa:Pessoa){
    this.isFormVisible=true;
    this.isEditar=true;
  this.pessoa=pessoa;
  }
  saveEditarPessoa(){
   
    this.pessoaService.editarPessoa(this.pessoa).subscribe(
      data=>{
       console.log("data ", data);
       
        let indexPessoa=this.pessoas.findIndex(person=>this.pessoa.id=data.id);
        this.pessoas[indexPessoa]=data;
      },
      error=>console.log("erro ", error)
      
    );
  }

  deletarPessoa(id:number){
    this.pessoaService.deletarPessoa(id).subscribe(
      data=>{
        this.pessoas=this.pessoas.filter(res=>res.id!==id);
      },
      error=>console.log("Error ", error)     
    )

  }

  cancel():void{
    this.isFormVisible=false;
    this.isEditar=false;
  }
}
