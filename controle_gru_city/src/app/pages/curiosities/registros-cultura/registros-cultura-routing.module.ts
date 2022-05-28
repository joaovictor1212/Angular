import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosCulturaPage } from './registros-cultura.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosCulturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosCulturaPageRoutingModule {}
