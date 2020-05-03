import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INews } from 'src/app/common/interfaces/INews';
import { NewsService } from 'src/app/core/services/news.service';
import { HttpClient } from '@angular/common/http';
import { UsernameValidators } from 'src/app/common/validators/username.validators';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;
  currentNewsId: number;
  currentNews: INews;
  constructor(private fb: FormBuilder,
    private route: Router,
    private toastrService: ToastrService,
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    ) {
    this.newsForm = fb.group({
      id: [this.currentNews?this.currentNews.id:' ',[]],
      title: [this.currentNews?this.currentNews.title:' ', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(100),
        Validators.pattern(/^((?!\s{2,}).)*$/)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(115),
        Validators.maxLength(150),
      ]],
      summary: ['', [
        Validators.required,
        Validators.minLength(200),
      ]],
      image: ['', [
        // Validators.required
      ]],
      createdDate: ['',[]],
      date: ['',[]],
      month:['',[]]
    });
  }

  ngOnInit(): void {
    this.currentNewsId = this.activatedRoute.snapshot.params.id;
    if (this.currentNewsId) {
      this.currentNews = this.newsService.getNewsById(this.currentNewsId);
      this.newsForm.setValue(this.currentNews);
    }
    if (!this.currentNews) {
      this.newsForm.reset();
    }

  }


  resetForm() {
    this.newsForm.reset();
  }

  addNews(news: INews) {
    this.newsService.addNews(news);
    this.route.navigate(['/news']);
    this.toastrService.success('News Added successfully!', 'News Portal');
  }

  updateNews(news: INews) {
    this.newsService.updateNews(news);
    this.route.navigate(['/news']);
    this.toastrService.success('News Updated successfully!', 'News Portal');
  }

  

  // onFileSelected(event){
  //   console.log(event);
  //   debugger;
  //   this.selectedNewsPic = <File>event.target.files[0];
  // }

  // uploadImageToAssestsFolder(){
  //   debugger;
  //   const fd = new FormData();
  //       fd.append('image', this.selectedNewsPic, this.selectedNewsPic.name);
  //       this.http.post('http://localhost:4200/assets/images/news', fd)
  //         .subscribe(res => {
  //           console.log(res);
  //         });
  // }

  get title(){
    debugger;
    return this.newsForm?this.newsForm.get('title'):'';
  }

  get description(){
    return this.newsForm?this.newsForm.get('description'):'';
  }
  get summary(){
    return this.newsForm?this.newsForm.get('summary'):'';
  }
}
