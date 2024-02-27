import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewportWidthService {
  private _isDesktopView = new Subject<boolean>();
  public isDesktopView$ = this._isDesktopView.asObservable();

  public setDesktopView(desktopView: boolean) {
    this._isDesktopView.next(desktopView);
  }
}
