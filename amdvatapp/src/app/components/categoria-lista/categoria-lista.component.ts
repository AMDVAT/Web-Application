import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.scss'],
})
export class CategoriaListaComponent implements OnInit {

  constructor(
      public actionSheetController: ActionSheetController,
      public alertController: AlertController
  ) { }
  data: true;

  categorys: any = [
    {
      categoria: 'Telefono',
      id: '1'
    },{
      categoria: 'Radios',
      id: '2'
    }
  ];

  ngOnInit() {}

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


  async editarCategoria(categoria: string) {

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

  async presentActionSheet(categoria: string) {
    console.log(categoria);
    const actionSheet = await this.actionSheetController.create({
      header: categoria,
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.eliminarCategoria(categoria);
        }
      }, {
        text: 'Actualizar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.editarCategoria(categoria);
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
