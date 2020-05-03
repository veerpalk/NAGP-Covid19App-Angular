import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidStateData } from '../models/state-wise-data-models/covid-state-data';
import { CaseTimeSeriesData } from '../models/state-wise-data-models/case-time-series-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { Router } from '@angular/router';
import { TestedData } from '../models/state-wise-data-models/tested-data';

@Component({
  selector: 'app-tested-case-display',
  templateUrl: './tested-case-display.component.html',
  styleUrls: ['./tested-case-display.component.scss']
})
export class TestedCaseDisplayComponent implements OnInit {

  covidStateData: CovidStateData;

  covidTestedCases: TestedData[] = [];


  displayedColumns: string[] = [
    'totalindividualstested',
    // 'samplereportedtoday',
    'totalsamplestested',
    'totalpositivecases',

   'individualstestedperconfirmedcase',
    // 'positivecasesfromsamplesreported',
    // 'testpositivityrate',
     //'testsconductedbyprivatelabs',
     'testsperconfirmedcase',
     'updatetimestamp',
     'source',
  ];
  dataSource: MatTableDataSource<TestedData>;

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
      this.covidTestedCases = this.covidStateData.tested

      this.dataSource = new MatTableDataSource(this.covidTestedCases);
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
