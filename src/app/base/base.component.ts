import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavigationLink, navigationLinks } from '../models/navigation-link.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnDestroy {
  private selectedLink$ = new Subject<string>();
  public destroy$ = new Subject<boolean>();

  selectedLink = '';
  navigationLinks = navigationLinks;

  constructor(protected router: Router) {}

  observeSelectedLink() {
    this.selectedLink$.pipe(takeUntil(this.destroy$)).subscribe((link) => {
      this.selectedLink = link;
      this.navigationLinks.forEach((navLink) => {
        navLink.selected = navLink.route === link;
      });
    });
  }

  updateSelectedLink(link: NavigationLink) {
    this.selectedLink$.next(link.route);
  }

  setInitialSelectedLink() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url.substring(1);
        const currentLink = this.navigationLinks.find((link) => link.route === currentRoute);
        if (currentLink) {
          this.updateSelectedLink(currentLink);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
