import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent implements OnInit {

	private nome: string;

	private mensagem: string;

  	constructor() { }

  	ngOnInit() {}

	onSubmit() {
		this.mensagem = `Olá ${this.nome}!`;
	}

}
