import { Injectable, NgZone } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CheckNetworkStatusService {

  private snackBarRef;

  constructor(private snackBar: MatSnackBar, private ngZone: NgZone) {
    console.log('Registering CheckNetworkStatusService');
    this.ngZone.runOutsideAngular(() => {
      interval(2000).subscribe(() => {
        if (!navigator.onLine && !this.snackBarRef) {
          this.snackBarRef = this.snackBar.open('Offline mode, please reconnect the device in order to use all app features.');
        } else if (navigator.onLine && this.snackBarRef) {
          this.snackBarRef.dismiss();
          this.snackBarRef = undefined;
        }
      });
    });
  }
}
