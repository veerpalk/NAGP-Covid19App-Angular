import { TestBed, async } from '@angular/core/testing';

import { CovidDataService } from './covid-data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CovidDataService', () => {
  let service: CovidDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
      ],
      providers: [
        CovidDataService
      ]
    });
    service = TestBed.inject(CovidDataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Given Covid Data Service, when called statewise data expect a function call', () => {
    service.getCovidStateData().subscribe((data) => {
      expect(data.cases_time_series.length).toBeGreaterThan(0);
    })
  });

  it('Given Covid Data Service, when called district wise data expect a function call', () => {
    service.getCovidDistrictData().subscribe((data) => {
      expect(Object.keys(data)).toBeGreaterThan(0);
    })
  });

})
