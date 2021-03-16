import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveStreamingPage } from './live-streaming.page';
import {SingleStreamingComponent} from './single-streaming/single-streaming.component';

const routes: Routes = [
  {
    path: '',
    component: LiveStreamingPage
  },
  {
    path: 'watch',
    component: SingleStreamingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveStreamingPageRoutingModule {}
