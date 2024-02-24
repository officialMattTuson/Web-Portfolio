import { Component } from '@angular/core';
import { homeText } from './home-text';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  homeText = homeText;
}
