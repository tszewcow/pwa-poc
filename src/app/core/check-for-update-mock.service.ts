import { Injectable } from '@angular/core';

@Injectable()
export class CheckForUpdateMockService {

  constructor() {
    console.log('Not a production environment');
  }
}
