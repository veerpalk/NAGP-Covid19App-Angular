import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { AddNewsComponent } from 'src/app/news/add-news/add-news.component';
import { NewsDetailComponent } from 'src/app/news/news-detail/news-detail.component';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ToastrModule.forRoot(),RouterTestingModule.withRoutes(
        [{path: 'news/add', component: NewsDetailComponent},{path: 'news/edit/:id', component: AddNewsComponent}]
      )]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
