import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResenaService} from '../../services/resena/resena.service';
import {Resena} from '../../models/resena';
import {SessionService} from "../../services/session/session.service";
import {GestionUsuarioService} from "../../services/gestion-usuarios/gestion-usuario.service";

@Component({
    selector: 'app-comentarios',
    templateUrl: './comentarios.component.html',
    styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {

    isLogin = false;
    rate: 0;
    cometario: '';
    idUser: number;

    resenas: any = [];
    resena: Resena = {
        comentario: '',
        valoracion: 0,
        usuario: 0,
        producto: 0
    };

    usuario: any = [];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private resenaService: ResenaService,
        private sessionService: SessionService,
        private usuarioService: GestionUsuarioService
    ) {
    }

    ngOnInit() {
        this.sessionService.getUserToken(token => {
            if (token === undefined) {

            } else {
                this.isLogin = true;
                this.mostrarPerfil();
                this.getComentarios();
            }

        });
    }

    onModelChange($event: any) {
        console.log(this.rate);

    }

    enviarComentario() {
        if (this.rate !== undefined && this.cometario !== undefined) {
          // console.log(this.rate, this.cometario);
          const id = this.route.snapshot.paramMap.get('id');
          this.resena.comentario = this.cometario;
          this.resena.valoracion = this.rate;
          this.resena.usuario = this.idUser;
          this.resena.producto = +id;
          this.resenaService.postResena(this.resena).subscribe(
            res => {
                alert('Comentario agregado');
                location.href = `/producto/${id}`;
            }, error => console.log(error)
          );

        } else {
            alert('Error al enviar comentario');
        }
    }

    getComentarios() {
        const id = this.route.snapshot.paramMap.get('id');
        this.resenaService.getResenaProducto(id).subscribe(
          res => {
              this.resenas = res;
              console.log(this.resenas);
          }, error => console.log(error)
        );
    }

    mostrarPerfil() {
        this.sessionService.getUserEmail(email => {
            this.sessionService.getUserToken(token => {
                this.usuarioService.getUserByEmail(email, token).subscribe(
                    res => {
                        this.usuario = res;
                        this.idUser = this.usuario.id_usuario;
                    }, error => console.log(error)
                );

            });
        });
    }
}
