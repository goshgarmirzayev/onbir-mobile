import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveStreamingPageRoutingModule } from './live-streaming-routing.module';

import { LiveStreamingPage } from './live-streaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveStreamingPageRoutingModule
  ],
  declarations: [LiveStreamingPage]
})
export class LiveStreamingPageModule {}
