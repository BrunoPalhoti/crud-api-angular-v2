import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule
  ],
  exports: [
    CategoriaListComponent,
    CategoriaFormComponent
  ]
})
export class CategoriaModule { }
