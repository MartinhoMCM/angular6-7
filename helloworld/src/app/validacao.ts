import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export class Validacao{

    static validate(control:FormControl){
        let email =control.value;
   
        if(email && email.indexOf("@")!=-1){
          let[_, dominio]=email.split("@");
          if(dominio==="udemy.com"){
           return {
             emailDominio:{
               dominio:true
             }
           }
          }
          else {
            return {
                emailDominio:{
                  dominio:false
                }
              }
          }
        }
        else return null;
     }

     static validateEmailModelo():ValidatorFn{
         
        return (control:AbstractControl)=>{
            let email =control.value;
   
            if(email && email.indexOf("@")!=-1){
              let[_, dominio]=email.split("@");
              if(dominio==="udemy.com"){
               return null;
              }
              else {
                return {
                    dominioValido:{
                      dominio:false
                    }
                  }
              }
            }
            else return null;
        }

     }
}