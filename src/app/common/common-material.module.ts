// This is a shared module that is used throughout the app.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { ToastrModule } from 'ngx-toastr';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';  
import {MatSortModule} from '@angular/material/sort';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PortalFooterComponent, PortalHeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ToastrModule,
    PortalHeaderComponent,
    PortalFooterComponent,
    FlexLayoutModule,
    RouterModule,
    PageNotFoundComponent,
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class CommonMaterialModule {
  constructor() {
    console.log("Common Material module loaded.");
  }
}
