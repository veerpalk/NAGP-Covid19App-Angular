import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWiseCaseDisplayComponent } from './time-wise-case-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DistrictWiseCasesDisplayComponent } from '../district-wise-cases-display/district-wise-cases-display.component';

describe('TimeWiseCaseDisplayComponent', () => {
  let component: TimeWiseCaseDisplayComponent;
  let fixture: ComponentFixture<TimeWiseCaseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [ {path: 'viewCases/:state', component: DistrictWiseCasesDisplayComponent}])
      ],
      declarations: [ TimeWiseCaseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeWiseCaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
