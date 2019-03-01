import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

	private nome: string;

  	constructor(private alertController: AlertController) { }

  	ngOnInit() {}

	async mensagem() {
    	const alert = await this.alertController.create({
      		header: 'Olá!',
      		// subHeader: 'Subtitle',
      		message: 'Bem vindo ' + this.nome + '!',
      		buttons: ['OK']
    	});

    	await alert.present();
  	}

	onSubmit() {
		this.mensagem();
	}

}
