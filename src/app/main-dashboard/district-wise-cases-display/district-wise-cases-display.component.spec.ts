import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictWiseCasesDisplayComponent } from './district-wise-cases-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('DistrictWiseCasesDisplayComponent', () => {
  let component: DistrictWiseCasesDisplayComponent;
  let fixture: ComponentFixture<DistrictWiseCasesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [ DistrictWiseCasesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseCasesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
