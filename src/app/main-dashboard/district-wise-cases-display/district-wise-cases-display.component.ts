import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { DistrictData } from '../models/district-wise-data-models/district-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DistrictCaseDetail } from '../models/district-wise-data-models/district-case-detail';


@Component({
  selector: 'app-district-wise-cases-display',
  templateUrl: './district-wise-cases-display.component.html',
  styleUrls: ['./district-wise-cases-display.component.scss']
})
export class DistrictWiseCasesDisplayComponent implements OnInit {


  currentState: string;

  districtDataInfo: DistrictData;

  districtCaseDetail: DistrictCaseDetail[] = [];

  displayedColumns: string[] = ['districtName', 'active', 'confirmed', 'deceased', 'recovered',
    'deltaConfirmed', 'deltaDeceased', 'deltaRecovered'];

  dataSource: MatTableDataSource<DistrictCaseDetail> = new MatTableDataSource<DistrictCaseDetail>();


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private covidDataService: CovidDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllDistrictData();
  }

  getAllDistrictData() {
    this.currentState = this.activatedRoute.snapshot.params.state;

    if (this.currentState) {
      this.covidDataService.getCovidDistrictData().subscribe(data => {

        this.districtDataInfo = data[this.currentState];
        let index: number = 0;
        for (const key in this.districtDataInfo.districtData) {
          var districtCaseDetail_temp: DistrictCaseDetail = Object.values(this.districtDataInfo.districtData)[index];
          districtCaseDetail_temp.districtName = key;

          this.districtCaseDetail.push(districtCaseDetail_temp);
          index++;
        }
        this.dataSource.data = this.districtCaseDetail;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }
    if (!this.districtCaseDetail) {
      this.router.navigate(['/dashboard']);
      this.toastrService.warning("No such state found!", "Dashboard Portal");
    }
  }

  goBackToDashBoard() {
    this.router.navigate(['/dashboard']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
