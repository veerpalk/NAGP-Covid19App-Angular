import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestedCaseDisplayComponent } from './tested-case-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { DistrictWiseCasesDisplayComponent } from '../district-wise-cases-display/district-wise-cases-display.component';

describe('TestedCaseDisplayComponent', () => {
  let component: TestedCaseDisplayComponent;
  let fixture: ComponentFixture<TestedCaseDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes(
          [ {path: 'viewCases/:state', component: DistrictWiseCasesDisplayComponent}])
        ],
      declarations: [ TestedCaseDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedCaseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
