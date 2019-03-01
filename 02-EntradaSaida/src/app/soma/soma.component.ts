import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.scss'],
})
export class SomaComponent implements OnInit {

	private n1: number;

	private n2: number;

	private saida: string;

  	constructor() { }

  	ngOnInit() {}

  	soma() {
		this.saida = `${this.n1} + ${this.n2} = ${this.n1 + this.n2}`;
	}

}
