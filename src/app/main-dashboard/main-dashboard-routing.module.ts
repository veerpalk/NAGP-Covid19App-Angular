import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModule } from '../common/common-material.module';
import { Routes, RouterModule } from '@angular/router';
import { DistrictWiseCasesDisplayComponent } from './district-wise-cases-display/district-wise-cases-display.component';

export const mainDashboardRoutes: Routes = [
  {path: 'viewCases/:state', component: DistrictWiseCasesDisplayComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonMaterialModule,
    RouterModule.forChild(mainDashboardRoutes),
  ],
  exports: [
    CommonMaterialModule,
    RouterModule
  ]
})
export class MainDashboardRoutingModule { }
