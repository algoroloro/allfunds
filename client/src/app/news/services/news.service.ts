import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CoreService } from '../../core/services/core.service';
import { ICardInfo } from '../interfaces/card-info.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends CoreService<ICardInfo> {

  constructor(http: HttpClient) {
    super(http)
  }

  getNews(): Observable<ICardInfo[]> {
    return this.read(`http://localhost:3000/new`)
  }

  getArchivedNews(): Observable<ICardInfo[]> {
    return this.read(`http://localhost:3000/new/archived`)
  }
}
