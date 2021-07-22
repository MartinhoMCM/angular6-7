import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

   
  constructor(private pessoaService:PessoaService, private logService:LogService) { 

  
  }

  ngOnInit(): void {
    console.log(this.pessoaService);
  }

}
