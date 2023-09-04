import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccessibilityPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  async presentActionSheet2() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      htmlAttributes: {
        'aria-label': 'Action Sheet Dialog',
      },
      buttons: [
        {
          icon: 'trash',
          htmlAttributes: {
            'aria-label': 'delete',
          },
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
          icon: 'share',
          htmlAttributes: {
            'aria-label': 'share',
          },
          text: 'Share',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('share');
          },
        },
        {
          icon: 'close',
          htmlAttributes: {
            'aria-label': 'close',
          },
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
