import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  updateNew(id?: string, item?: ICardInfo): Observable<ICardInfo[]> {
    return this.update(`http://localhost:3000/new/${id}`, <ICardInfo>item)
  }

  deleteNew(id?: string): Observable<ICardInfo[]> {
    return this.delete(`http://localhost:3000/new/${id}`)
  }
}
