import {Component, OnInit} from '@angular/core';
import {LiveStreamingService} from '../../services/live-streaming.service';
import {LiveStreaming} from '../../models/live-streaming';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-streaming',
  templateUrl: './single-streaming.component.html',
  styleUrls: ['./single-streaming.component.scss'],
})
export class SingleStreamingComponent implements OnInit {
  private match: LiveStreaming;
  private matchId: number;

  constructor(private service: LiveStreamingService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.matchId = params.matchId;
    });
    this.getData();
  }

  getData() {
   this.service.getMatchById(this.matchId).subscribe((data => {
      this.match = data;
    }));
  }
}
