import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NewsPage} from './news.page';
import {NewsSingleComponent} from './news-single/news-single.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }, {
    path: 'single',
    component: NewsSingleComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {
}
