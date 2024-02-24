import { Component } from '@angular/core';
import { homeText } from './home-text';
import { BaseComponent } from '../base/base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {
  homeText = homeText;

  constructor(protected override router: Router) {
    super(router);
  }

  navigateToAboutRoute() {
    const aboutLink = this.navigationLinks.find((link) => link.route === 'about');
    if (!aboutLink) {
      return;
    }
    this.updateSelectedLink(aboutLink);
    this.router.navigateByUrl('about');
  }

  redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/matt-tuson-b67247236/');    
  }
  
  redirectToGithub() {
    window.open('https://github.com/officialMattTuson');    
  }
}
