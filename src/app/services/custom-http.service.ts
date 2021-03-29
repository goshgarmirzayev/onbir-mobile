import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient) {
  }

  private createAuthorizationHeader(isPublic?: boolean) {
    const token = localStorage.getItem('auth-token');
    let headers = new HttpHeaders();
    headers = headers.set('Accept-Language', 'en');
    headers = headers.set('Content-Type', 'application/json');
    if (!isPublic) {
      headers = headers.set('x-auth-token', token || '111');
    }
    return headers;
  }

  get(url: string, httpParams?: HttpParams, isPublic?: boolean, isText?, isFile?): Observable<any> {
    const httpHeaders = this.createAuthorizationHeader(isPublic);
    const options: any = {
      headers: httpHeaders,
      params: httpParams
    };
    if (isText) {
      options.responseType = 'text';
    }
    if (isFile) {
      options.responseType = 'blob';
    }
    return this.httpClient.get(url, options);
  }

  post(url: string, responseClass: any, body?, httpParams?: HttpParams, isPublic?: boolean, isFileUpload?: boolean): Observable<any> {
    let httpHeaders = this.createAuthorizationHeader(isPublic);
    if (isFileUpload) {
      httpHeaders = httpHeaders.delete('Content-Type');
    }
    return this.httpClient.post<typeof responseClass | null>(url, body, {headers: httpHeaders, params: httpParams});
  }

  put(url: string, responseClass: any, body?, httpParams?: HttpParams, isPublic?: boolean, isFileUpload?: boolean): Observable<any> {
    let httpHeaders = this.createAuthorizationHeader(isPublic);
    if (isFileUpload) {
      httpHeaders = httpHeaders.delete('Content-Type');
    }
    return this.httpClient.put<typeof responseClass | null>(url, body, {headers: httpHeaders, params: httpParams});
  }
}
