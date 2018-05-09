import { CheckNetworkStatusService } from './core/check-network-status.service';
import { CheckForUpdateService } from './core/check-for-update.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';

  constructor(
    private checkForUpdateService: CheckForUpdateService,
    private checkNetworkStatusService: CheckNetworkStatusService) { }
}
