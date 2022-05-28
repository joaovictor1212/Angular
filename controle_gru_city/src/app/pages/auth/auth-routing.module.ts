import { TopoLoginComponent } from './component/topo-login/topo-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { ForgotPage } from './forgot/forgot.page';
import { RegisterPage } from './register/register.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
        {
          path: '', component: LoginPage
        },
        {
          path: 'forgot', component: ForgotPage
        },
        {
          path: 'register', component: RegisterPage
        }

    ]
  }

];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations:[
    LoginPage,
    ForgotPage,
    RegisterPage,
    TopoLoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AuthRoutingModule { }