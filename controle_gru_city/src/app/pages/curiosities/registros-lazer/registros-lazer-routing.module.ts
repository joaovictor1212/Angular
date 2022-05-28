import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosLazerPage } from './registros-lazer.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosLazerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosLazerPageRoutingModule {}
