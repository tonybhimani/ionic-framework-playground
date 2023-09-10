import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-accessibility',
  templateUrl: 'accessibility.page.html',
  styleUrls: ['accessibility.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AccessibilityPage {
  constructor(private alertController: AlertController) {}

  async presentAlertAccessibility() {
    const alert = await this.alertController.create({
      message: 'This is an alert with custom aria attributes.',
      htmlAttributes: {
        'aria-label': 'alert dialog',
      },
      buttons: [
        {
          text: 'Exit',
          htmlAttributes: {
            'aria-label': 'close',
          },
        },
      ],
    });

    await alert.present();
  }
}
