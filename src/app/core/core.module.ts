import { CheckNetworkStatusService } from './check-network-status.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipHeaderComponent } from './vip-header/vip-header.component';
import { VipFooterComponent } from './vip-footer/vip-footer.component';
import { CheckForUpdateService } from './check-for-update.service';
import { CheckForUpdateMockService } from './check-for-update-mock.service';
import { environment } from '../../environments/environment';

import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  declarations: [VipHeaderComponent, VipFooterComponent],
  providers: [
    {
      provide: CheckForUpdateService, useClass: environment.production ? CheckForUpdateService : CheckForUpdateMockService
    },
    CheckNetworkStatusService
  ]
})
export class CoreModule { }


