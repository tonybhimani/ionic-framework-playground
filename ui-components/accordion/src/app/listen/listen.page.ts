import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-listen',
  templateUrl: 'listen.page.html',
  styleUrls: ['listen.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ListenPage {
  constructor() {}

  @ViewChild('listenerOut', { static: true }) listenerOut!: ElementRef;
  private values: string[] = ['first', 'second', 'third'];

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = this.values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value}
      Collapsed: ${collapsedItems.join(', ')}
    `;
  };
}
