/* tslint:disable:no-unused-variable */
import {async, TestBed} from '@angular/core/testing';
import {AbonneesComponent} from './abonees.component';
import {NgModule} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {VodagoneAngularModule} from '../../modules/angular.module';
import {VodagoneMaterialModule} from '../../modules/material.module';

@NgModule({
  entryComponents: [
    AbonneesComponent
  ],
})
export class TestModule {
}

describe('AbonneesComponent', () => {
  let component: AbonneesComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AbonneesComponent
      ],
      imports: [
        VodagoneAngularModule,
        VodagoneMaterialModule,
        TestModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(AbonneesComponent);
    component = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
