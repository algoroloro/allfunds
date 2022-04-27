import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivedComponent } from './components/archived/archived.component';
import { NewsComponent } from './components/news/news.component';
import { NewsHomeComponent } from './containers/news-home/news-home.component';

const routes: Routes = [
  {path: 'home', redirectTo: 'home/news', pathMatch: 'full'},
  {
    path: 'home',
    component: NewsHomeComponent,
    children: [
      {path: 'news', component: NewsComponent},
      {path: 'archived', component: ArchivedComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRouting { }
