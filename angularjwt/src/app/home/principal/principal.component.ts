import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core-service/token.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario:Usuario;
  constructor(private token: TokenService, private router:Router) { }
  navbarCollapsed = true; 
  ngOnInit(): void {
    var result= this.token.getToken("usuario");
    this.usuario=JSON.parse(result)
  }
  
  clicked(){
  this.navbarCollapsed = !this.navbarCollapsed
  }

  sair(){
    this.token.removerToken("usuario");
    this.router.navigate(['/login']);

  }
}
