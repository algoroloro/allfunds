import { Component, OnInit } from '@angular/core';
import { ICardInfo } from '../../interfaces/card-info.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  cards_info: ICardInfo[] = []

  constructor (private newsService: NewsService) {}

  ngOnInit () {
    this.getNews()
  }

  getNews() {
    this.newsService.getNews().subscribe((res) => {
      console.log(res);
      this.cards_info = res
    })
  }

  archiveNew(new_id: string) {
    console.log('emito', new_id);
  }

}
