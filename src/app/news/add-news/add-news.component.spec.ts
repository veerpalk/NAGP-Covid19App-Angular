import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponent } from './add-news.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { NewsService } from 'src/app/core/services/news.service';
import { inflateRawSync } from 'zlib';
import { INews } from 'src/app/common/interfaces/INews';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;
  let newsServiceMock: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewsComponent],
      imports: [ RouterTestingModule.withRoutes(
        [{path: 'news', component: AddNewsComponent}]
      ), 
      ToastrModule.forRoot(),
      ReactiveFormsModule, FormsModule, BrowserAnimationsModule],
      providers: [NewsService, LoginService]
    })
      .compileComponents();
    newsServiceMock = TestBed.get(NewsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given add News Component, form invalid when empty', () => {
    expect(component.newsForm.valid).toBeFalsy();
  });

  it('Given add News Component, add should be called while adding news', () => {
    var mockNews: INews;
    spyOn(newsServiceMock, 'addNews')
    component.addNews(mockNews);
    expect(newsServiceMock.addNews).toHaveBeenCalled();
  
  });

  it('Given add News component, update should be called while updating news', () => {
    var mockNews: INews;
    spyOn(newsServiceMock, 'updateNews');
    component.updateNews(mockNews);
    expect(newsServiceMock.updateNews).toHaveBeenCalled();
  });
  // it('Given add news when url changes , finds the news by Id', () => {
  //   component.currentNewsId = 1;
  //   fixture.detectChanges();
  //   expect(newsServiceMock.getNewsById).toHaveBeenCalled();
  // })
});
