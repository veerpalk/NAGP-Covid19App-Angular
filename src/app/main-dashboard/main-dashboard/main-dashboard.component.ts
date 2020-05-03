import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { CovidStateData } from '../models/state-wise-data-models/covid-state-data';

import { CaseTimeSeriesData } from '../models/state-wise-data-models/case-time-series-data';

import { StateDataInfo } from '../models/state-wise-data-models/state-data-info';
import { TestedData } from '../models/state-wise-data-models/tested-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  selectedTabIndex = 0;

  covidStateData: CovidStateData;

  covidTimeWiseCases: CaseTimeSeriesData[];
  covideStateWiseCases: StateDataInfo[];
  covidTestedCases: TestedData[];

  constructor(private covidDataService: CovidDataService,
    private route: Router) { }

  ngOnInit(): void {
    this.getAllCovidStateData();
  }

  getAllCovidStateData() {
    this.covidDataService.getCovidStateData().subscribe(data => {
      this.covidStateData = data;
      if (this.covidStateData) {
        this.covideStateWiseCases = this.covidStateData.statewise;
        this.covidTimeWiseCases = this.covidStateData.cases_time_series;
        this.covidTestedCases = this.covidStateData.tested;
      }
    })
  }

  loadStateWiseDisplay() {
    this.route.navigate(['dashboard/state-wise-cases-display']);
  }
  loadTimeWiseDisplay() {

    this.route.navigate(['dashboard/time-wise-cases-display']);
  }
  loadTestedDisplay() {
    this.route.navigate(['dashboard/tested-cases-display']);
  }
  tabSelectionChanged(event) {
  
    this.selectedTabIndex = event;
    console.log("selectedTab:" + event);
    //  if(selectedTabIndex === 0){
    //   this.loadStateWiseDisplay();
    //  }
    //  if(selectedTabIndex === 1){
    //   this.loadTimeWiseDisplay;
    //  }
    //  if(selectedTabIndex === 2){
    //   this.loadTestedDisplay;
    //  }
  }
}