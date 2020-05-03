import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ CommonMaterialModule} from '../common/common-material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsRoutingModule } from './news-routing.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LatestNewsComponent, NewsDetailComponent, AddNewsComponent],
  imports: [
    NewsRoutingModule,
    CommonMaterialModule
  ],
  exports:[
    NewsRoutingModule,
    LatestNewsComponent,
    NewsDetailComponent,
    AddNewsComponent
  ]
})
export class NewsModule {
  constructor() {
    console.log("Lates News Module loaded.");
  }
 }
