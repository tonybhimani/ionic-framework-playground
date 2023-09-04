import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.page.html',
  styleUrls: ['./controller.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ControllerPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet1() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('delete');
          },
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('share');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('cancel');
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnInit() {
  }

}
