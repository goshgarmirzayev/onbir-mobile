import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveStreamingPage } from './live-streaming.page';

const routes: Routes = [
  {
    path: '',
    component: LiveStreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveStreamingPageRoutingModule {}
