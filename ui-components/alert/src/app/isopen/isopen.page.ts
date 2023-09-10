import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-isopen',
  templateUrl: 'isopen.page.html',
  styleUrls: ['isopen.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class IsOpenPage {
  constructor() {}

  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
