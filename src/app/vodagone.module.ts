import {NgModule} from '@angular/core';


import {VodagoneComponent} from './vodagone.component';
import {VodagoneAngularModule} from './modules/angular.module';
import {VodagoneMaterialModule} from './modules/material.module';
import {LoginService} from './services/login/login.service';
import {LoggingService} from './services/logging/logging.service';
import {LoginComponent} from './presentation/login/login.component';
import {AbonnementenOverviewComponent} from './presentation/abonnementen-overview/abonnementen-overview.component';
import {AbonnementenComponent} from './presentation/abonnementen/abonnementen.component';
import {AbonnementComponent} from './presentation/abonnement/abonnement.component';
import {AbonnementenService} from './services/abonnementen/abonnementen.service';
import {AbonneesComponent} from './presentation/abonees/abonnees.component';
import {AbonneeService} from './services/abonee/abonee.service';


@NgModule({
  declarations: [
    VodagoneComponent,
    LoginComponent,
    AbonneesComponent,
    AbonnementenOverviewComponent,
    AbonnementenComponent,
    AbonnementComponent
  ],
  entryComponents: [
    AbonneesComponent
  ],
  imports: [
    VodagoneAngularModule,
    VodagoneMaterialModule
  ],
  providers: [
    AbonneeService,
    AbonnementenService,
    LoggingService,
    LoginService],
  bootstrap: [VodagoneComponent]
})
export class VodagoneModule {
}
