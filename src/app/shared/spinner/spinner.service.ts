import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loaderSubject: Subject<boolean> = new Subject<boolean>();
  public isLoading$: Observable<boolean> = this.loaderSubject.asObservable();

  constructor() {}

  public show(): void {
    this.loaderSubject.next(true);
  }

  public hide(): void {
    this.loaderSubject.next(false);
  }
}
