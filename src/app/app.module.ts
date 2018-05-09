import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule, MatToolbarModule  } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    CoreModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
