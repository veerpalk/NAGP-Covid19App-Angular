import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidStateData } from '../models/state-wise-data-models/covid-state-data';
import { CaseTimeSeriesData } from '../models/state-wise-data-models/case-time-series-data';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { Router } from '@angular/router';
import { StateDataInfo } from '../models/state-wise-data-models/state-data-info';

@Component({
  selector: 'app-state-wise-cases-display',
  templateUrl: './state-wise-cases-display.component.html',
  styleUrls: ['./state-wise-cases-display.component.scss']
})
export class StateWiseCasesDisplayComponent implements OnInit {

  covidStateData: CovidStateData;

  covidStateWiseCases: StateDataInfo[];

  covidStateWiseTotalCases: StateDataInfo;


  displayedColumns: string[] = ['state', 'statecode','active',
    'confirmed',
    'deaths',
    'recovered',
    'lastupdatedtime',
  ];
  dataSource: MatTableDataSource<StateDataInfo>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private covidDataService: CovidDataService,
    private route: Router) { 
      this.getAllCovidStateData();
    }
  ngOnInit(): void {
    this.getAllCovidStateData();
  }

  getAllCovidStateData() {
    this.covidDataService.getCovidStateData().subscribe(data => {
      this.covidStateData = data;
      this.covidStateWiseTotalCases = this.covidStateData.statewise[0];

      this.covidStateWiseCases = this.covidStateData.statewise.filter(x=> x.statecode !== 'TT');
      
      this.dataSource = new MatTableDataSource(this.covidStateWiseCases);
      // Assign the paginator *after* dataSource is set
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  viewDistrictWiseDisplay(){

  }
}
