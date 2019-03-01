import { Component, OnInit, Input } from '@angular/core';
import { Repositorio } from '../model/repositorio';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {

    @Input() repositorio : Repositorio;

    constructor(private modalController : ModalController) { }

    ngOnInit() {}

    fecha() {
        this.modalController.dismiss();
    }

}
