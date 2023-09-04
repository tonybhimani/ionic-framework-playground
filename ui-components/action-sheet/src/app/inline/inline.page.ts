import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inline',
  templateUrl: 'inline.page.html',
  styleUrls: ['inline.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InlinePage {
  constructor() {}

  public actionSheetButtons = [
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
  ];
}
