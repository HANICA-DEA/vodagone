import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AbonnementComponent} from './abonnement.component';
import {VodagoneAngularModule} from '../../modules/angular.module';
import {VodagoneMaterialModule} from '../../modules/material.module';

describe('AbonnementComponent', () => {
  let component: AbonnementComponent;
  let fixture: ComponentFixture<AbonnementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AbonnementComponent
      ],
      imports: [
        VodagoneAngularModule,
        VodagoneMaterialModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
