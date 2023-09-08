import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.page.html',
  styleUrls: ['./theming.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ThemingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
