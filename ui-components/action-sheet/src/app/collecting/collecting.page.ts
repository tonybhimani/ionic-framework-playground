import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-collecting',
  templateUrl: './collecting.page.html',
  styleUrls: ['./collecting.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CollectingPage implements OnInit {

  constructor() { }

  result: string | undefined;

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

  setResult(ev: any) {
    this.result = JSON.stringify(ev.detail, null, 2);
  }

  ngOnInit() {
  }

}
