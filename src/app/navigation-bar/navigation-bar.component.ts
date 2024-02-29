import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ViewportWidthService } from '../services/viewport-width.service';
import { SideMenuService } from '../services/side-menu.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent extends BaseComponent implements OnInit {
  isDesktopView$ = this.viewPortWidthService.isDesktopView$;

  constructor(
    protected override readonly router: Router,
    private readonly elementRef: ElementRef,
    private readonly sideMenuService: SideMenuService,
    private readonly viewPortWidthService: ViewportWidthService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super(router);
  }

  ngOnInit(): void {
    this.observeViewPortWidth();
    this.setInitialSelectedLink();
    this.observeSelectedLink();
  }

  observeViewPortWidth(): void {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const viewportWidth = entry.contentRect.width;
        const isDesktopView = viewportWidth > 1000;
        this.viewPortWidthService.setDesktopView(isDesktopView);
        this.changeDetectorRef.detectChanges();
      }
    });
    resizeObserver.observe(this.elementRef.nativeElement);
  }

  onMenuButtonClick() {
    this.sideMenuService.sstSideMenuOpen();
  }


}
