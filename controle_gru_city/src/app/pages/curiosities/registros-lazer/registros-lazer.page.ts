import { AlertController } from '@ionic/angular';
import { LoginService } from './../../auth/service/login.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CuriositiesService } from '../service/curiosities.service';


@Component({
  selector: 'app-registros-lazer',
  templateUrl: './registros-lazer.page.html',
  styleUrls: ['./registros-lazer.page.scss'],
})
export class RegistrosLazerPage implements OnInit {
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
    this.curiosidade.lista('lazer').subscribe((x)=>(this.listaCuriosidades = x));

  }

  async remove(curiosidade){

    const confirm = await this.alert.create({
      header: "Remove Local de Lazer",
      message: "Deseja remover este local para lazer?",
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
      header: "Lazer",
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
