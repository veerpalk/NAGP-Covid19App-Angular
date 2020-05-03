import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidStateData } from '../models/state-wise-data-models/covid-state-data';
import { CaseTimeSeriesData } from '../models/state-wise-data-models/case-time-series-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-wise-case-display',
  templateUrl: './time-wise-case-display.component.html',
  styleUrls: ['./time-wise-case-display.component.scss']
})
export class TimeWiseCaseDisplayComponent implements OnInit {

  covidStateData: CovidStateData;

  covidTotalCasesTimeSeries: CaseTimeSeriesData[];


  displayedColumns: string[] = ['date','dailyconfirmed', 'dailydeceased',
    'dailyrecovered',
    'totalconfirmed',
    'totaldeceased',
    'totalrecovered'];
  dataSource: MatTableDataSource<CaseTimeSeriesData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private covidDataService: CovidDataService,
    private route: Router) { }
  ngOnInit(): void {
    this.getAllCovidStateData();
  }

  getAllCovidStateData() {
    this.covidDataService.getCovidStateData().subscribe(data => {
      this.covidStateData = data;
      this.covidTotalCasesTimeSeries = this.covidStateData.cases_time_series;

      this.dataSource = new MatTableDataSource(this.covidTotalCasesTimeSeries);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
  /**************TEST TABLE */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
