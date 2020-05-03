import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseCasesDisplayComponent } from './state-wise-cases-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DistrictWiseCasesDisplayComponent } from '../district-wise-cases-display/district-wise-cases-display.component';

describe('StateWiseCasesDisplayComponent', () => {
  let component: StateWiseCasesDisplayComponent;
  let fixture: ComponentFixture<StateWiseCasesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(
          [ {path: 'viewCases/:state', component: DistrictWiseCasesDisplayComponent}])
      ],
      declarations: [ StateWiseCasesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseCasesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
