import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { StateWiseCasesDisplayComponent } from './state-wise-cases-display/state-wise-cases-display.component';
import { TimeWiseCaseDisplayComponent } from './time-wise-case-display/time-wise-case-display.component';
import { TestedCaseDisplayComponent } from './tested-case-display/tested-case-display.component';
import { DistrictWiseCasesDisplayComponent } from './district-wise-cases-display/district-wise-cases-display.component';

@NgModule({
  declarations: [
    MainDashboardComponent,
    StateWiseCasesDisplayComponent,
    TimeWiseCaseDisplayComponent,
    TestedCaseDisplayComponent,
    DistrictWiseCasesDisplayComponent],
  imports: [
    CommonModule,
    MainDashboardRoutingModule
  ],
  exports: [
    MainDashboardComponent,
    StateWiseCasesDisplayComponent,
    TimeWiseCaseDisplayComponent,
    TestedCaseDisplayComponent,
    MainDashboardRoutingModule,
    DistrictWiseCasesDisplayComponent
  ]
})
export class MainDashboardModule { }
