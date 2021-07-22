import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APP_URL="http://localhost:3000/";

  constructor(private http:HttpClient, private token:TokenService) {

   }

   autenticar(usuario:string, senha:string):Observable<Usuario>{
    
 return this.http.get<Usuario>(this.APP_URL+'usuarios',
    {
      params:{
         nomeusuario:usuario,
         senha:senha
      }
    } ).pipe(
      map(
        res=>{
          this.token.setToken("usuario", JSON.stringify(res[0]))
          return res[0];
         
        }
      )
    );

   }
}
