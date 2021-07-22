import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core-service/token.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:Usuario;
  constructor(private token:TokenService) { }

  ngOnInit(): void {
   var result= this.token.getToken("usuario");
   this.usuario=JSON.parse(result)

    
  }

}
