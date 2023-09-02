import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FootballPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
