import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sports',
  templateUrl: 'sports.page.html',
  styleUrls: ['sports.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SportsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}