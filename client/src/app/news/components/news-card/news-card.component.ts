import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICardInfo } from '../../interfaces/card-info.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {

  @Input() card_info?: ICardInfo
  @Output() archiveButtonEmitter = new EventEmitter<string>()

  onArchiveClick(new_id?: string): void {
    this.archiveButtonEmitter.emit(new_id)
  }

}
