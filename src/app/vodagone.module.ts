import {NgModule} from '@angular/core';


import {VodagoneComponent} from './vodagone.component';
import {VodagoneAngularModule} from './modules/angular.module';
import {VodagoneMaterialModule} from './modules/material.module';
import {LoginService} from './services/login/login.service';
import {LoggingService} from './services/logging/logging.service';
import {LoginComponent} from './presentation/login/login.component';


@NgModule({
  declarations: [
    VodagoneComponent,
    LoginComponent
  ],
  imports: [
    VodagoneAngularModule,
    VodagoneMaterialModule
  ],
  providers: [
        LoggingService,
        LoginService],
  bootstrap: [VodagoneComponent]
})
export class VodagoneModule {
}
