import { Component, OnDestroy, OnInit } from '@angular/core';
import { navigationLinks, NavigationLink } from '../models/navigation-link.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  private selectedLink$ = new BehaviorSubject('home');
  private destroy$ = new Subject<boolean>();

  selectedLink = '';
  navigationLinks: NavigationLink[] = navigationLinks;

  ngOnInit(): void {
    this.observeSelectedLink();
  }

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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
