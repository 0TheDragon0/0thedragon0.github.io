import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ContentEndpointService {
  contentEndpoint = `${API_URL}content/content`;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  addContent(item: any): Observable<Object> {
    const body = JSON.stringify(item);
    return this.http.post(this.contentEndpoint, body, this.apiService.getHttpOptions());
  }
}
