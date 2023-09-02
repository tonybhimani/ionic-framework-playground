import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.page.html',
  styleUrls: ['./basketball.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BasketballPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
