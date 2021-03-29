import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveStreamingService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(environment.ENDPOINTS.LIVE);
  }

  getMatchById(id): Observable<any> {
    return this.http.get(environment.ENDPOINTS.LIVE_SINGLE.replace(':id', id));
  }
}
