import { Injectable } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class CheckForUpdateService {

  constructor(updates: SwUpdate) {
    console.log('Production environment - adding interval for checking for new app versions.');
    interval(6 * 60 * 60).subscribe(() => {
      console.log('New Version check run.');
      updates.checkForUpdate();
    });
  }

}
