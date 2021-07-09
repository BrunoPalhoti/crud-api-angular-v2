import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CpfPipe } from './pipes/cpf.pipe';
import { ErroFieldMessagesComponent } from './components/erro-field-messages/erro-field-messages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ErroFieldMessagesComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ErroFieldMessagesComponent,
    CpfPipe
  ]
})
export class SharedModule { }
