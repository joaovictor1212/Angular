import { LoginService } from './../../auth/service/login.service';
import { CuriositiesService } from '../service/curiosities.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {
  listaCuriosidades;


  constructor(
    private curiosidade: CuriositiesService,
    private sanitizer: DomSanitizer,
    private service: LoginService,
    private alert: AlertController

  ) { }

  linkUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.curiosidade.lista('restaurante').subscribe((x)=>(this.listaCuriosidades = x));

  }

  async remove(curiosidade){

    const confirm = await this.alert.create({
      header: "Remove Restaurante",
      message: "Deseja remover este restaurante?",
      buttons:[{
        text: 'Cancelar',
        role: 'cancel'
      },
        {
          text: 'Deletar',
          handler: () => this.curiosidade.remove(curiosidade)
        }
    ]
    });

    confirm.present()
  }

  async edita(curiosidade){

    const confirm = await this.alert.create({
      header: "Restaurante",
      inputs: [
        {
          name: 'titulo',
          value: curiosidade.titulo,
          placeholder: 'Nome do local'
        },

        {
          name: 'descricao',
          value: curiosidade.descricao,
          placeholder:'Descrição do Local'
        },

        {
          name: 'endereco',
          value: curiosidade.endereco,
          placeholder: 'Endereço do local (link embed)'
        }
      ],
      buttons:[{
        text: 'Cancelar',
        role: 'cancel'
      },
        {
          text: 'Editar',
          handler: (data) => {
            curiosidade.titulo = data.titulo;
            curiosidade.descricao = data.descricao;
            curiosidade.endereco = data.endereco;
            this.curiosidade.edita(curiosidade);
          }
        }
    ]
    });

    confirm.present()    
  }

  logout(){
    this.service.logout();
  }

}
