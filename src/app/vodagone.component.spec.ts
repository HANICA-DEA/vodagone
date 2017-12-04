import { TestBed, async } from '@angular/core/testing';
import { VodagoneComponent } from './vodagone.component';
import {LoginComponent} from './presentation/login/login.component';
import {VodagoneMaterialModule} from './modules/material.module';
import {VodagoneAngularModule} from './modules/angular.module';
import {LoginService} from './services/login/login.service';
import {LoggingService} from './services/logging/logging.service';
describe('VodagoneComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VodagoneComponent,
        LoginComponent
      ],
      imports: [
      VodagoneMaterialModule,
      VodagoneAngularModule
    ],
      providers: [
      LoginService,
      LoggingService
    ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(VodagoneComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
