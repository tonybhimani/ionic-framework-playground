import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inputs',
  templateUrl: 'inputs.page.html',
  styleUrls: ['inputs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InputsPage {
  constructor() {}

  public alertButtonsText = ['OK'];
  public alertInputsText = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  public alertButtonsRadio = ['OK'];
  public alertInputsRadio = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];
}
