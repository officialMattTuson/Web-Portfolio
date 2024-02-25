import { Component, ElementRef, OnInit } from '@angular/core';
import { aboutIntroText, aboutTechText, goalsText, hobbyText } from './about.text';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutIntroText = aboutIntroText;
  aboutTechText = aboutTechText;
  hobbyText = hobbyText;
  goalsText = goalsText;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initializeObserver();
  }

  handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }

  initializeObserver() {
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);

    const sectionsToObserve: NodeListOf<Element> = this.elementRef.nativeElement.querySelectorAll('.section');
    sectionsToObserve.forEach((section) => observer.observe(section));
  }

  showText(elementId: string) {
    document.querySelector(`#${elementId}`)?.classList.toggle('show');
  }
}
