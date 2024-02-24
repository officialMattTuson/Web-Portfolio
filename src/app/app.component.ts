import { Component, ElementRef } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {
  title = 'Portfolio';

  constructor(protected override router: Router) {
    super(router);
  }
}
