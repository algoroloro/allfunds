import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './components/news/news.component';
import { ArchivedComponent } from './components/archived/archived.component';
import { NewsHomeComponent } from './containers/news-home/news-home.component';
import { NewsRouting } from './news.routing';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [
    NewsComponent,
    ArchivedComponent,
    NewsHomeComponent,
    NewsCardComponent
  ],
  imports: [
    SharedModule,
    NewsRouting
  ]
})
export class NewsModule { }
