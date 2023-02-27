import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EmptyComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
