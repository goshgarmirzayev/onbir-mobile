import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'live-streaming',
    loadChildren: () => import('./live-streaming/live-streaming.module').then(m => m.LiveStreamingPageModule)
  },
  {
    path: 'icmallar',
    loadChildren: () => import('./icmallar/icmallar.module').then(m => m.IcmallarPageModule)
  },
  {
    path: 'standings',
    loadChildren: () => import('./standings/standings.module').then(m => m.StandingsPageModule)
  },  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
