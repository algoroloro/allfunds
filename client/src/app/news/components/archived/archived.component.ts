import { Component, OnInit } from '@angular/core';
import { ICardInfo } from '../../interfaces/card-info.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {

  cards_info: ICardInfo[] = []

  constructor (private newsService: NewsService) {}

  ngOnInit () {
    this.getNews()
  }

  getNews() {
    this.newsService.getArchivedNews().subscribe((res) => {
      this.cards_info = res
    })
  }

  archiveNew(new_id: string) {
    console.log('emito', new_id);
  }

}
