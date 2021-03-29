import {Component, OnInit} from '@angular/core';
import {LiveStreamingService} from '../../services/live-streaming.service';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../../services/news-service.service';
import {NewsResponse} from "../../models/news-response";

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss'],
})
export class NewsSingleComponent implements OnInit {
  private newsId;
  private news = new NewsResponse();

  constructor(private service: NewsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.newsId = params.newsId;
    });
    this.getData();
  }

  private getData() {
    this.service.getPostById(this.newsId).subscribe((data => {
      this.news = data;
    }));
  }
}
