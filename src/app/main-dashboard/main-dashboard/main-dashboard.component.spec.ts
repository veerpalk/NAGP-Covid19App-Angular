import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardComponent } from './main-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DistrictWiseCasesDisplayComponent } from '../district-wise-cases-display/district-wise-cases-display.component';

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,
        HttpClientTestingModule,  
        RouterTestingModule.withRoutes(
        [ {path: 'viewCases/:state', component: DistrictWiseCasesDisplayComponent}])],
      declarations: [ MainDashboardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
