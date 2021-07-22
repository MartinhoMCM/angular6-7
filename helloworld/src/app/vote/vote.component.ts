import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  foiVotado:boolean=false;
  
  @Output() enviaVoto=new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  vota(voto:boolean){
    this.enviaVoto.emit(voto)
    this.foiVotado=true;
     //voto?this.concorda++:this.naoconcorda++;
  }


}
