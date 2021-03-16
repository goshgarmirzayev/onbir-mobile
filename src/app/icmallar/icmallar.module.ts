import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcmallarPageRoutingModule } from './icmallar-routing.module';

import { IcmallarPage } from './icmallar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcmallarPageRoutingModule
  ],
  declarations: [IcmallarPage]
})
export class IcmallarPageModule {}
