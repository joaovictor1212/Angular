import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosLazerPageRoutingModule } from './registros-lazer-routing.module';

import { RegistrosLazerPage } from './registros-lazer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosLazerPageRoutingModule
  ],
  declarations: [RegistrosLazerPage]
})
export class RegistrosLazerPageModule {}
