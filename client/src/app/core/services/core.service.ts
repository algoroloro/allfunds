import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService<T> {

  constructor(private http: HttpClient) { }

  read(url: string): Observable<T[]> {
    return this.http.get<T[]>(url)
  }
}
