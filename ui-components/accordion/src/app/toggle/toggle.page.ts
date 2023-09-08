import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.page.html',
  styleUrls: ['toggle.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TogglePage {

  constructor() {}

  @ViewChild('accordionGroup', { static: true }) accordionGroup!: IonAccordionGroup;

  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };

}
