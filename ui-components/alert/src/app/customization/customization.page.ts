import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customization',
  templateUrl: 'customization.page.html',
  styleUrls: ['customization.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class CustomizationPage {
  constructor() {}

  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
}
