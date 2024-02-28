import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { Router } from '@angular/router';
import { SideMenuService } from './services/side-menu.service';
import { MatDrawer } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  title = 'Portfolio';

  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(protected override router: Router, private readonly sideMenuService: SideMenuService) {
    super(router);
  }

  ngOnInit(): void {
    this.observeSideMenuState();
  }

  observeSideMenuState() {
    this.sideMenuService.isSideMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((isSideMenuOpen) => {
      if (isSideMenuOpen) {
        this.drawer.open();
      } else {
        this.drawer.close();
      }
    });
  }
}
