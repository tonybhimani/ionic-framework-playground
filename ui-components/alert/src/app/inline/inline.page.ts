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

  public alertButtons = ['OK'];
}
