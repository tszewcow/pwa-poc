import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VipHeaderComponent } from './vip-header/vip-header.component';
import { VipFooterComponent } from './vip-footer/vip-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VipHeaderComponent, VipFooterComponent]
})
export class CoreModule { }
