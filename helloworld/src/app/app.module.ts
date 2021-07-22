import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VoteComponent } from './vote/vote.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioReativoAninhadoComponent } from './formulario-reativo-aninhado/formulario-reativo-aninhado.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormularioModeloComponent } from './formulario-modelo/formulario-modelo.component';
import { DirectivaemailDirective } from './formulario-modelo/directivaemail.directive';
import { PessoaComponent } from './pessoa/pessoa.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VoteComponent,
    LifecycleComponent,
    FormularioComponent,
    FormularioReactivoComponent,
    FormularioReativoAninhadoComponent,
    FormBuilderComponent,
    FormularioModeloComponent,
    DirectivaemailDirective,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
