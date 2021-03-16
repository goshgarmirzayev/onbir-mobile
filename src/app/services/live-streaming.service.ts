import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
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
}
