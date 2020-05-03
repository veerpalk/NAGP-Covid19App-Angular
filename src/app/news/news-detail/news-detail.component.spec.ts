import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailComponent } from './news-detail.component';
import { NewsService } from 'src/app/core/services/news.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewsDetailComponent', () => {
  let component: NewsDetailComponent;
  let fixture: ComponentFixture<NewsDetailComponent>;
  let newsServiceMock: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailComponent ],
      providers: [NewsService],
      imports: [BrowserAnimationsModule, ToastrModule.forRoot(),RouterTestingModule.withRoutes(
        [{path: 'news', component: NewsDetailComponent}, {path: 'news/:id', component: NewsDetailComponent}]
      )]
    })
    .compileComponents();
    newsServiceMock = TestBed.get(NewsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given News Detail Component, should call news service to deleteNews',()=>{
    spyOn(newsServiceMock, 'deleteNewsById');
    component.deleteNews();
    expect(newsServiceMock.deleteNewsById).toHaveBeenCalled();
  })

});
