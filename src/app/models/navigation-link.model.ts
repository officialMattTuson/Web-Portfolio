export interface NavigationLink {
  route: string;
  displayName: string;
  selected?: boolean;
}

export const navigationLinks: NavigationLink[] = [
  {
    route: 'home',
    displayName: 'Home',
    selected: true,
  },
  {
    route: 'about',
    displayName: 'About',
  },
  {
    route: 'skills',
    displayName: 'Skills',
  },
  {
    route: 'education',
    displayName: 'Education',
  },
  {
    route: 'experience',
    displayName: 'Experience',
  },
  {
    route: 'contact',
    displayName: 'Contact',
  },
];
