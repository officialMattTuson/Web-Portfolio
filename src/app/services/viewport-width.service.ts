import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportWidthService {
  private _isDesktopView = new Subject<boolean>();
  public isDesktopView$ = this._isDesktopView.asObservable();

  private _currentDesktopView!: boolean;

  public setDesktopView(desktopView: boolean) {
      if (desktopView !== this._currentDesktopView) {
          this._currentDesktopView = desktopView; 
          this._isDesktopView.next(desktopView);
      }
  }
}
