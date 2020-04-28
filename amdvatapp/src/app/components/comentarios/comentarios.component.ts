import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-comentarios',
    templateUrl: './comentarios.component.html',
    styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {

    comentarios = [
        {
            first_name: 'Donn',
            last_name: 'Mc Comb',
            comment: 'Stock - Veal, White',
            rating: 5
        },
        {
            first_name: 'Mathew',
            last_name: 'O Driscoll',
            comment: 'Petite Baguette',
            rating: 4
        },
        {
            first_name: 'Lexie',
            last_name: 'Diemer',
            comment: 'Lettuce - Curly Endive',
            rating: 1
        },
        {
            first_name: 'Roda',
            last_name: 'June',
            comment: 'Chocolate - Dark Callets',
            rating: 1
        },
        {
            first_name: 'Lauren',
            last_name: 'Epgrave',
            comment: 'Daves Island Stinger',
            rating: 3
        },
        {
            first_name: 'Mylo',
            last_name: 'Powlett',
            comment: 'Extract - Almond',
            rating: 2
        },
        {
            first_name: 'Ricky',
            last_name: 'Sjostrom',
            comment: 'Cleaner - Bleach',
            rating: 3
        },
        {
            first_name: 'Emanuele',
            last_name: 'Coombes',
            comment: 'Pork - Bacon, Double Smoked',
            rating: 3
        },
        {
            first_name: 'Adiana',
            last_name: 'Foulkes',
            comment: 'Veal - Sweetbread',
            rating: 3
        },
        {
            first_name: 'Meade',
            last_name: 'De Miranda',
            comment: 'Yogurt - Banana, 175 Gr',
            rating: 1
        }
    ];
    rate: 0;
    cometario: '';

    constructor() {
    }

    ngOnInit() {
    }

    onModelChange($event: any) {
        console.log(this.rate);

    }

    enviarComentario() {
        if (this.rate !== undefined && this.cometario !== undefined) {
          console.log(this.rate, this.cometario);
        } else {
            alert('Error al enviar comentario');
        }
    }
}
