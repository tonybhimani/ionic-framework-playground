import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.page.html',
  styleUrls: ['./multiple.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MultiplePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
