import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-disabling',
  templateUrl: './disabling.page.html',
  styleUrls: ['./disabling.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DisablingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
