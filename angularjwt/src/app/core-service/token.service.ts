import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(key:string, value:string):void{
    localStorage.setItem(key, value);
  }
  removerToken(key:string):void{
    localStorage.removeItem(key);
  }
  getToken(key:string):string{
    var fetch= localStorage.getItem(key);
    if(fetch==null && fetch==undefined){
      return null;
    }

    return fetch;
  }
  
}
