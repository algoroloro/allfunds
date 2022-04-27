import { Component } from '@angular/core';
import { INavLinks } from '../../interfaces/nav-links.interface';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent {
  nav_links: INavLinks[] = [
    {
      label: 'Últimas Noticias',
      link: 'news',
      index: 0
    },
    {
      label: 'Noticias Archivadas',
      link: 'archived',
      index: 1
    }
  ];
}
