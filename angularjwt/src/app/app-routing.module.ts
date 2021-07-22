import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { UsuarioComponent } from './home/usuario/usuario.component';
import { ClienteComponent } from './home/cliente/cliente.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'registro', component:RegisterComponent
  },
  {
    path:'principal', component:PrincipalComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'usuario', component:UsuarioComponent
      },
      {
        path:'cliente', component:ClienteComponent
      }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
