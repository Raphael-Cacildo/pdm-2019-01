import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repositorio } from '../model/repositorio';


@Injectable({
  providedIn: 'root'
})
export class GitHubRestService {

    private url : string = "https://api.github.com";

    constructor(private httpClient : HttpClient) { }

    pesquisaRepositorios(query : string, pagina : number, itens_por_pagina : number) : Observable<Repositorio[]> {
        let params = new HttpParams().set("q", query);
        params = params.append("page", String(pagina));
        params = params.append("per_page", String(itens_por_pagina));

        return this.httpClient
            .get<any>(this.url + '/search/repositories', {params : params})
            .pipe(
                map(resposta => {
                    if (resposta && resposta.items)
                        return resposta.items;
                    else
                        return [];
                }),
                catchError(error => {
                    console.log('[GitHubRestService] ' + error);
                    return Observable.throw(error); })
            );
    }
}
