import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {SessionService} from '../../services/session/session.service';

import {Sucursal} from '../../models/sucursal';
import {GestionSucursalService} from '../../services/gestion-sucursal/gestion-sucursal.service'

@Component({
  selector: 'app-sucursal-simple',
  templateUrl: './sucursal-simple.component.html',
  styleUrls: ['./sucursal-simple.component.scss'],
})
export class SucursalSimpleComponent implements OnInit {

  sucursal: Sucursal ={
    nombre: '',
    direccion: '',
    numero: 0
  }

  sucursalP: Sucursal;
  edit = false;
  editSucursal: any = [];
  id_sucusar: number;

  constructor(
        private sucursalService: GestionSucursalService, 
        private alertController: AlertController,
        private activeRoute: ActivatedRoute,
        private session: SessionService,
        private router: Router
  ) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;

    if (params.id) {
      this.session.getUserToken(token => {
        console.log('Entro aca edit ' + params.id + ', ' + token)
       /*
        this.sucursalService.getOneSucursal(params.id,token).subscribe(
            res => {
              this.editSucursal = res;
              this.sucursal.nombre = this.editSucursal.nombre;
              this.sucursal.direccion = this.editSucursal.direccion;
              this.sucursal.numero = this.editSucursal.numero;
              console.log(this.sucursal.nombre)
              console.log(res);
            }, error => console.log(error)
        );
        */ 
      });
      this.edit = true;
    }

  }

  menuAccion(){
    if(this.edit)
      this.editarSucursal();  
    else
      this.saveSucursal();
  }

  saveSucursal(){
    console.log('Se registrara');
    this.session.getUserToken(token => {
        this.sucursalService.saveSucursal(this.sucursal,token).subscribe(
            res => {
                alert('Sucursal registrada');
                location.href = 'gestion/sucursal/lista';
            }, error => console.log(error)
        );
    });
    
  }

  editarSucursal(){
    console.log('Se editara');
    console.log(this.sucursal);
    /*
    this.session.getUserToken(token => {
      const params = this.activeRoute.snapshot.params;
      this.sucursalService.updateSucursal(params.id,this.sucursal,token).subscribe(
          res => {
              console.log(res);
              alert('Sucursal editada');
              location.href = 'gestion/sucursal/lista';
          }, error => console.log(error)
      );
    });*/
  }

  async messageSave() {
    const alert = await this.alertController.create({
      header: 'Almacenado',
      message: '<strong>La sucursal ha sido gestionada con exito </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
  async errorMessageSave() {
    const alert = await this.alertController.create({
      header: 'No Almacenado',
      message: '<strong>No se ha logrado gestionar la sucursal,revise los datos </strong>',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}
