import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
  { path: 'produto-list', component: ProdutoListComponent }, //lista
  { path: 'produto-form', component: ProdutoFormComponent }, //criar
  { path: 'produto-form/:id', component: ProdutoFormComponent } //alterar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
