import { Component, OnInit } from '@angular/core';
import { GestionProductoService } from 'src/app/services/gestion-producto/gestion-producto.service';
import { SessionService } from 'src/app/services/session/session.service';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-reserva-lista',
  templateUrl: './reserva-lista.component.html',
  styleUrls: ['./reserva-lista.component.scss'],
})
export class ReservaListaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productoService: GestionProductoService,
    private session: SessionService,
    private activeRoute: ActivatedRoute
  ) { }

  reservasExistentes: any;
  
  reserva: Array<Reserva>;
  idUsuario: string;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idUsuario = id;
    this.getReservas();
  }


  getReservas(){
    this.session.getUserToken(token => {
        const params = this.activeRoute.snapshot.params;
        console.log('Se obtendran las reservas');
        console.log(token);
        this.productoService.getReservar(token).subscribe(
            res => {
                this.reservasExistentes = res;
                console.log(res);
            }, error => console.log(error)
        );
    });
  }


}
