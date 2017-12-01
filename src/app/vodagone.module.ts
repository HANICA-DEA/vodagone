import {NgModule} from '@angular/core';


import {VodagoneComponent} from './vodagone.component';
import {VodagoneAngularModule} from './modules/angular.module';
import {VodagoneMaterialModule} from './modules/material.module';


@NgModule({
  declarations: [
    VodagoneComponent
  ],
  imports: [
    VodagoneAngularModule,
    VodagoneMaterialModule
  ],
  providers: [],
  bootstrap: [VodagoneComponent]
})
export class VodagoneModule {
}
