import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcmallarPage } from './icmallar.page';

const routes: Routes = [
  {
    path: '',
    component: IcmallarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcmallarPageRoutingModule {}
