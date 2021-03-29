import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Xəbərlər', url: '/news', icon: 'newspaper'},
    {title: 'İcmallar', url: '/icmallar', icon: 'repeat'},
    {title: 'Canlı matçlar', url: '/live-streaming', icon: 'play'},
    {title: 'Turnir cədvəli', url: '/standings', icon: 'stats-chart'},
    {title: 'Haqqımızda & Əlaqə', url: '/contact', icon: 'call'},
  ];

  constructor() {
  }
}
