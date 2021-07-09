import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarComponent } from './auth/validar/validar.component';
import { GuardService } from './shared/guard/guard.service';

const routes: Routes = [  //lazy load
  { path: '',          component: ValidarComponent },
  { path: 'usuario',   loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),                canActivate: [GuardService] },
  { path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule), canActivate: [GuardService] },
  { path: 'produto',   loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),       canActivate: [GuardService] },
  { path: 'auth',      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
