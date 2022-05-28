import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RegistrosCulturaPage } from './registros-cultura/registros-cultura.page';
import { RegistrosLazerPage } from './registros-lazer/registros-lazer.page';
import { RegistrosPage } from './registros-restaurantes/registros.page';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path:'',children:[
    {
      path: 'registro_restaurante', 
      component: RegistrosPage
    },

    {
      path:'registros_lazer', 
      component: RegistrosLazerPage
    },
    
    {
      path:'registros_cultura', 
      component: RegistrosCulturaPage
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegistrosPage,
    RegistrosLazerPage,
    RegistrosCulturaPage
  ]
  
})
export class CuriositiesRoutingModule { }
