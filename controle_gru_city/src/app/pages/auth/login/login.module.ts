import { TopoLoginComponent } from './../component/topo-login/topo-login.component';
// import { ComponentModule } from '../../../component/component.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // ComponentModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage,
    TopoLoginComponent
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginPageModule {}
