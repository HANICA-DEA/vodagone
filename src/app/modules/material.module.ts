import 'hammerjs';
import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatMenuModule,
  MatSnackBarModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule]
})
export class VodagoneMaterialModule {
}
