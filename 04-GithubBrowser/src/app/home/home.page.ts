import { Component } from '@angular/core';
import { GitHubRestService } from '../service/git-hub-rest.service';
import { Repositorio } from '../model/repositorio';
import { ModalController } from '@ionic/angular';
import { DetalhesComponent } from '../detalhes/detalhes.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    private repositorios : Repositorio[] = [];
    private nome : string;
    private pagina : number = 1;
    private itens_por_pagina : number = 5;

    constructor(private gitHubService : GitHubRestService,
        private modalController: ModalController) { }

     pesquisa() {
         this.gitHubService.pesquisaRepositorios(this.nome, this.pagina, this.itens_por_pagina)
             .subscribe(repositorios => {
                 this.repositorios = repositorios;
             },
             erro => {
                 console.log('[HomePage] ' + erro);
             }
           );
     }

     anterior() {
         this.gitHubService.pesquisaRepositorios(this.nome, --this.pagina, this.itens_por_pagina)
             .subscribe(repositorios => {
                 this.repositorios = repositorios;
             },
             erro => {
                 console.log('[HomePage] ' + erro);
             }
           );
     }


     proximo() {
         this.gitHubService.pesquisaRepositorios(this.nome, ++this.pagina, this.itens_por_pagina)
             .subscribe(repositorios => {
                 this.repositorios = repositorios;
             },
             erro => {
                 console.log('[HomePage] ' + erro);
             }
           );
     }


     async detalhes(repositorio : Repositorio) {
         const modal = await this.modalController.create({
           component: DetalhesComponent,
           componentProps: { repositorio: repositorio },
         });

         return await modal.present();
     }

}
