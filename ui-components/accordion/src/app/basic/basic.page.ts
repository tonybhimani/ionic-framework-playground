import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-basic',
  templateUrl: 'basic.page.html',
  styleUrls: ['basic.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class BasicPage {
  constructor() {}
}
