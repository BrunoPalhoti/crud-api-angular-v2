import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ValidarComponent } from './validar/validar.component';


@NgModule({
  declarations: [
    ValidarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    ValidarComponent
  ]
})
export class AuthModule { }
