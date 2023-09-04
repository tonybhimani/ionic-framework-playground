import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customcss',
  templateUrl: './customcss.page.html',
  styleUrls: ['./customcss.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CustomcssPage implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
