import { Component } from '@angular/core';
import { GitHubRestService } from '../service/git-hub-rest.service';
import { Repositorio } from '../model/repositorio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    private nome : string;

    private repositorios : Repositorio[] = [];

    constructor(private gitHubService : GitHubRestService) { }

    pesquisa() {
        this.gitHubService.pesquisaRepositorios(this.nome)
            .subscribe(repositorios => {
                this.repositorios = repositorios;
            },
            erro => {
                console.log('[HomePage] ' + erro);
            }
          );
    }

}
