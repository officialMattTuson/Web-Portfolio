import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent extends BaseComponent implements OnInit {

  ngOnInit(): void {
    this.setInitialSelectedLink();
    this.observeSelectedLink();
  }
}
