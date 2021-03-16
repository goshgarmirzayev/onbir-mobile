import {Component, OnInit} from '@angular/core';
import {NewsService} from '../services/news-service.service';
import {NewsResponse} from '../models/news-response';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: NewsResponse [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.newsService.getData().subscribe((data => {
      this.newsList = data;
    }));
  }



}
