import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-controller',
  templateUrl: 'controller.page.html',
  styleUrls: ['controller.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ControllerPage {
  constructor(private alertController: AlertController) {}

  async presentAlertController() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
