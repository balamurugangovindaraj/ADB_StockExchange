import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private httpClient: HttpClient) { }
  getHeader() {
    let json = localStorage.getItem('userData');
    if (json) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(json).token
      });
      return { headers: headers }

    }
    return { headers: null };
  }
  getSecure(url:any): Observable<any> {
    return this.httpClient.get(url)
  }
  postSecure(url:any, payload:any): Observable<any> {
    return this.httpClient.post(url, payload)
  }
  deleteSecure(url:any): Observable<any> {
    return this.httpClient.delete(url)
  }
  putSecure(url:any, payload:any): Observable<any> {
    return this.httpClient.put(url, payload)
  }

}