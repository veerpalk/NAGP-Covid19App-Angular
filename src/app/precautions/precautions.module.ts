import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecautionsComponent } from './precautions/precautions.component';
import { CommonMaterialModule } from '../common/common-material.module';

@NgModule({
  declarations: [PrecautionsComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
  ],
  exports:[
    PrecautionsComponent,
    CommonMaterialModule
  ]
})
export class PrecautionsModule {
  constructor(){
    console.log("Precautions module Loaded...");
  }
 }
