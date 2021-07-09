import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';


@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule
  ],
  exports: [
    ProdutoListComponent,
    ProdutoFormComponent
  ]
})
export class ProdutoModule { }
