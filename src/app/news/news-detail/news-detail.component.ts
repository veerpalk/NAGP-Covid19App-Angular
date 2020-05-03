import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/common/interfaces/INews';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  news: INews;
  currentNewsId: number;

  // variable to check user is logged in or not.
  isLoggedIn: Observable<boolean>;
  // variable that holds user name.
  username = '';

  constructor(private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private loginservice: LoginService) {
  }

  ngOnInit(): void {

    this.isLoggedIn = this.loginservice.isLoggedIn;
    this.currentNewsId = this.activatedRoute.snapshot.params.id;
    if (this.currentNewsId) {
      this.news = this.newsService.getNewsById(this.currentNewsId);
    }
    if (!this.news) {
      this.router.navigate(['/news']);
      this.toastrService.warning("No such news found!", "Dashboard Portal");
    }
  }

  goBack() {
    this.router.navigate(['/news']);
  }

  deleteNews() {
    this.newsService.deleteNewsById(this.currentNewsId);
    this.router.navigate(['/news']);
    this.toastrService.warning("News Deleted succesfully!", "Dashboard Portal");
  }
}
