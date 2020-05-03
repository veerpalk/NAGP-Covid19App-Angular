import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonMaterialModule } from '../common/common-material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNewsComponent } from './add-news/add-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../login/admin-login/auth.guard';

export const newsRoutes: Routes = [
    {path: 'view/:id', component: NewsDetailComponent},
    {path: 'news/add', component: AddNewsComponent, canActivate: [AuthGuard]},
    {path: 'news/edit/:id', component: AddNewsComponent, canActivate: [AuthGuard]}
  ];
  
  /**
   * NgModule decorator that holds all the imported modules.
   * It also exports the modules for other modules to use them.
   */
  @NgModule({
    declarations: [],
    imports: [
    CommonModule,
    CommonMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(newsRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    ],
    exports: [
    CommonMaterialModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    ]
  })

  export class NewsRoutingModule {
      constructor() {
    console.log('News Routing module loaded.');
  }
}