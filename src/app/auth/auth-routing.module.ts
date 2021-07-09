import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarComponent } from './validar/validar.component';

const routes: Routes = [
  { path: 'auth-validar', component: ValidarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
