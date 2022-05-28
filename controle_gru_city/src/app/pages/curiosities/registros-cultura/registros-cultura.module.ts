import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosCulturaPageRoutingModule } from './registros-cultura-routing.module';

import { RegistrosCulturaPage } from './registros-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosCulturaPageRoutingModule
  ],
  declarations: [RegistrosCulturaPage]
})
export class RegistrosCulturaPageModule {}
