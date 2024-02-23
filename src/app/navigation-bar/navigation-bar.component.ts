import { Component } from '@angular/core';
import {
  navigationLinks,
  NavigationLink,
} from '../models/navigation-link.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent {
  navigationLinks: NavigationLink[] = navigationLinks;
}
