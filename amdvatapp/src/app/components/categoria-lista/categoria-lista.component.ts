import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {GestionCategoriaService} from '../../services/gestion-categoria/gestion-categoria.service';
import {GCategoria} from '../../models/g-categoria';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.scss'],
})
export class CategoriaListaComponent implements OnInit {

  constructor(
      public actionSheetController: ActionSheetController,
      public alertController: AlertController,
      private gestionCategoriaService: GestionCategoriaService
  ) { }

  data: true;
  categorias: any = [];

  categoria: GCategoria = {
    nombre: '',
    descripcion: '',
    categoria_id_categoria: null
  }

  ngOnInit() {
    this.categorias = null;
    this.gestionCategoriaService.getCategorias().subscribe(
      res => {
        this.categorias = res;
      }, error => console.log(error)
    );
  }

  async eliminarCategoria(categoria: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar!',
      message: `Desea eliminar la categoria <strong>${categoria}</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  async editarCategoria(categoria: string, categoriaID: number, categoriaDescripcion: string, categoriaPadre: number) {

     const alert = await this.alertController.create({
       header: 'Editar Categoria',
       message: `Ingrese el nuevo nombre de la categoria <strong>${categoria}</strong>`,
       inputs: [
         {
           name: 'Categoria',
           type: 'text',
           id: 'name2-id',
           placeholder: 'Ingrese el nombre'
         }
       ],
       buttons: [
         {
           text: 'Cancelar',
           role: 'cancel',
           cssClass: 'secondary',
           handler: () => {
             console.log('Confirm Cancel');
           }
         }, {
           text: 'Aceptar',
           handler: data => {
             console.log(data.Categoria);
           }
         }
       ]
     });

     await alert.present();


  }

  async presentActionSheet(categoriaNombre: string, categoriaID: number, categoriaDescripcion: string, categoriaPadre: number) {
    console.log(categoriaNombre);
    console.log(categoriaID);
    console.log(categoriaDescripcion);
    console.log(categoriaPadre);
    const actionSheet = await this.actionSheetController.create({
      header: categoriaNombre,
      buttons: [/*{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.eliminarCategoria(categoriaNombre);
        }
      }, */{
        text: 'Actualizar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.editarCategoria(categoriaNombre, categoriaID, categoriaDescripcion, categoriaPadre);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
