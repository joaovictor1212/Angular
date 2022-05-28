import { AlertController } from '@ionic/angular';
import { LoginService } from './../../auth/service/login.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CuriositiesService } from '../service/curiosities.service';


@Component({
  selector: 'app-registros-cultura',
  templateUrl: './registros-cultura.page.html',
  styleUrls: ['./registros-cultura.page.scss'],
})
export class RegistrosCulturaPage implements OnInit {
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
    this.curiosidade.lista('cultura').subscribe((x)=>(this.listaCuriosidades = x));

  }

  async remove(curiosidade){

    const confirm = await this.alert.create({
      header: "Remove local de cultura",
      message: "Deseja remover este local de cultura?",
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
      header: "Cultura",
      inputs: [
        {
          name: 'titulo',
          value: curiosidade.titulo,
          placeholder: 'Nome do Local'
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
