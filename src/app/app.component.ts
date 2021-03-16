import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Xəbərlər', url: '/news', icon: 'mail' },
    { title: 'İcmallar', url: '/icmallar', icon: 'paper-plane' },
    { title: 'Canlı matçlar', url: '/live-streaming', icon: 'heart' },
    { title: 'Turnir cədvəli', url: '/standings', icon: 'archive' },
  ];
  constructor() {}
}
