import {Component} from '@angular/core';
import {CheckNetworkStatusService} from './check-network-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';


  constructor(private checkNetworkStatusService: CheckNetworkStatusService) {
  }
}
