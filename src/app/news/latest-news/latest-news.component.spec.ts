import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsComponent } from './latest-news.component';
import { ToastrModule } from 'ngx-toastr';
import { NewsService } from 'src/app/core/services/news.service';

describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;
  let newsServiceMock: NewsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestNewsComponent ],
      imports: [ToastrModule.forRoot(),],
      providers: [NewsService]
    })
    .compileComponents();
    newsServiceMock = TestBed.get(NewsService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given Latest News Component, should get all news at start', () => {
    spyOn(newsServiceMock, 'getAllNews');
    component.ngOnInit();
    fixture.detectChanges();
    expect(newsServiceMock.getAllNews).toHaveBeenCalled();
  });

  it('Given Latest News Component, deletions should call news service to delete news', () => {
    spyOn(newsServiceMock, 'deleteNewsById');
    var newIdMock = 1;
    component.deleteNews(newIdMock);
    expect(newsServiceMock.deleteNewsById).toHaveBeenCalled();
  });

});
