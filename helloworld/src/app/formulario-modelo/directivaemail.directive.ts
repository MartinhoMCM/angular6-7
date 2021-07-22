import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Validacao } from '../validacao';

@Directive({
  selector: '[appDirectivaemail][ngModel]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useValue:Validacao.validateEmailModelo(),
       useExisting:DirectivaemailDirective, multi:true
    }
  ]
})
export class DirectivaemailDirective implements Validator {

  validator:ValidatorFn;

  constructor() {
    this.validator=Validacao.validateEmailModelo();
   }

  validate(control: AbstractControl): ValidationErrors {
    return this.validator;
  }
 
}
