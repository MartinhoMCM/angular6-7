import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  life:string="Ciclo de Vida";
  votantes =['Martinho', 'Correia','Mussamba', 'Dev'];
  title = 'helloworld';
  
  concorda:number=0;
  naoconcorda:number=0;
  foiVotado(voto:boolean){
    voto?this.concorda++:this.naoconcorda++;
  }
}
