import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  favorCalor =new FormControl('blue');
  color='yellow';
  name =new FormControl('Alfredo Mussamba');
  tapped=false;
  estado="Happy";

  updateName(){
   if(this.tapped) {
    this.name.reset()
   }
   else{
    this.name.setValue("Bernarda Martins Correia");
   }
   this.tapped=!this.tapped;
  

  }
  constructor() { }

  ngOnInit(): void {
  }

}
