import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.page.html',
  styleUrls: ['./customization.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CustomizationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
