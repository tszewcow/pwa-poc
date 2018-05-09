import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatSelectModule, MatToolbarModule, MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  exports: [
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class SharedModule {
}
