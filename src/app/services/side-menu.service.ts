import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private _isSideMenuOpen = new BehaviorSubject<boolean>(false);
  public isSideMenuOpen$ = this._isSideMenuOpen.asObservable();
  constructor() {}

  sstSideMenuOpen(sideMenuOpenRequest: boolean = true) {
    this._isSideMenuOpen.next(sideMenuOpenRequest);
  }
}
