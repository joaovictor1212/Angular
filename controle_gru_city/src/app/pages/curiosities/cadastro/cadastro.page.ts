import { LoginService } from './../../auth/service/login.service';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CuriositiesService } from '../service/curiosities.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  curiosityForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private nav: NavController,
    private curiosidade: CuriositiesService,
    private service: LoginService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.curiosityForm = this.builder.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]],
      descricao: ['', [Validators.required, Validators.minLength(25)]],
      endereco: ['', [Validators.required, Validators.minLength(1)]],
      tipo: ['', [Validators.required]],
    });
  }

  registraCuriosidade() {
    const curiosidade = this.curiosityForm.value;
    this.curiosidade.registraCuriosidade(curiosidade).then(() => {
      switch(curiosidade.tipo){
        case "restaurante": 
          this.nav.navigateForward('registros');
        break;
        case "lazer":
          this.nav.navigateForward('registros-lazer');
        break;
        case "cultura":
          this.nav.navigateForward('registros-cultura');
        break;
      }
    });
  }

  logout() {
    this.service.logout();
  }
}
