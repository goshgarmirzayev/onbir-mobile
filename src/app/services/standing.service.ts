import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(environment.ENDPOINTS.STANDING);
  }
}
