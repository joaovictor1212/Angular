import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/curiosities/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'registros',
    loadChildren: () => import('./pages/curiosities/registros-restaurantes/registros.module').then( m => m.RegistrosPageModule)
  },
  {
    path: 'registros-lazer',
    loadChildren: () => import('./pages/curiosities/registros-lazer/registros-lazer.module').then( m => m.RegistrosLazerPageModule)
  },
  {
    path: 'registros-cultura',
    loadChildren: () => import('./pages/curiosities/registros-cultura/registros-cultura.module').then( m => m.RegistrosCulturaPageModule)
  }
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppRoutingModule { }
