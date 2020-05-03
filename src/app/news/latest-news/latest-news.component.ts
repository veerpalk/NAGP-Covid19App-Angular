import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/common/interfaces/INews';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  // variable to check user is logged in or not.
  isLoggedIn: Observable<boolean>;
  // variable that holds user name.
  username = '';

  allNews : INews[];
  constructor(private newsService: NewsService,
    private toastrService: ToastrService,
    private loginService: LoginService) {  }

  ngOnInit(): void {
    this.allNews = this.newsService.getAllNews();
    this.isLoggedIn = this.loginService.isLoggedIn;
  }

  deleteNews(newsId: number)
  {
    this.newsService.deleteNewsById(newsId);
    this.toastrService.warning("News Deleted succesfully!", "Dashboard Portal");
  }
}
