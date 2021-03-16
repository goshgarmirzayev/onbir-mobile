import { Component, OnInit } from '@angular/core';
import {NewsResponse} from '../models/news-response';
import {NewsService} from '../services/news-service.service';
import {IcmalService} from '../services/icmal.service';

@Component({
  selector: 'app-icmallar',
  templateUrl: './icmallar.page.html',
  styleUrls: ['./icmallar.page.scss'],
})
export class IcmallarPage implements OnInit {
  newsList: NewsResponse [];

  constructor(private newsService: IcmalService) {
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
