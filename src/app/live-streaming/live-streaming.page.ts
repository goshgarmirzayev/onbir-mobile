import {Component, OnInit} from '@angular/core';
import {LiveStreaming} from '../models/live-streaming';
import {LiveStreamingService} from '../services/live-streaming.service';

@Component({
  selector: 'app-live-streaming',
  templateUrl: './live-streaming.page.html',
  styleUrls: ['./live-streaming.page.scss'],
})
export class LiveStreamingPage implements OnInit {
  matchList: LiveStreaming [];

  constructor(private service: LiveStreamingService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data => {
      this.matchList = data;
    }));
  }
}
