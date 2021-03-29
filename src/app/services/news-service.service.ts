import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentId = 0;

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    const params = new HttpParams();
    params.set('per_page', '30');
    params.set('page', '1');
    return this.http.get(environment.ENDPOINTS.NEWS, {params: {per_page: '30', page: '1'}});
  }

  getPostById(id): Observable<any> {
    return this.http.get(environment.ENDPOINTS.NEWS_SINGLE.replace(':id', id));
  }
}
