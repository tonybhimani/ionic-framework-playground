import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-readonly',
  templateUrl: './readonly.page.html',
  styleUrls: ['./readonly.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReadonlyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
