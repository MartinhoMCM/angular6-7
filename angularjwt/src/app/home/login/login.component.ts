import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-service/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  active:boolean=false;
  loginForm:FormGroup;
  usuario:Usuario;
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) { 
    this.loginForm=formBuilder.group({
      name:['', Validators.required],
      password:['', Validators.required]

    } );
  }

  ngOnInit(): void {

  }
  

  login():void{
console.log('Autenticando');
 this.authService.autenticar(this.loginForm.get('name').value, this.loginForm.get('password').value).subscribe(
   data=>{
   if(data!=null){
     this.usuario=data;
    this.router.navigate(['/principal'])
   
   }
   else{
    this.loginForm.reset();
   }},
   error=>console.error("onError ",error)
   
 );

  }

}
