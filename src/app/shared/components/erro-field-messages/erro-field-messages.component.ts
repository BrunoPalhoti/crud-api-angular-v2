import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'erro-field-messages',
  templateUrl: './erro-field-messages.component.html',
  styleUrls: ['./erro-field-messages.component.css']
})
export class ErroFieldMessagesComponent implements OnInit {

  @Input() field: FormControl | any = null
  @Input() nome:  any = null;

  constructor() { }

  ngOnInit(): void {
  }

  //tratamento de erro dos campos
  getErrorMessage(){
    if (this.field.errors){
      if (this.field.errors.required){
        return "Campo " + this.nome + "está vazio";
      }
      else if(this.field.errors.minlength){
        return  "Campo " + this.nome + "precisa ter tamanho mínimo de " + this.field.errors.minlength.requiredLength ;
      }
      return this.nome + "Inválido";
    }
    return null;
  }
}
