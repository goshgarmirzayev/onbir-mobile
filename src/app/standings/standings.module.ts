import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StandingsPageRoutingModule} from './standings-routing.module';

import {StandingsPage} from './standings.page';

declare const $: any;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandingsPageRoutingModule
  ],
  declarations: [StandingsPage]
})
export class StandingsPageModule {
}
