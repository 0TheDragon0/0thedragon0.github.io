import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { API_URL } from 'src/app/config';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationEndpointService {
  registerLoginEndpoint = `${API_URL}auth/register-login`;
  logoutEndpoint = `${API_URL}auth/logout`;
  isAuthenticatedEndpoint = `${API_URL}auth/is-authenticated`;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  register(signUpInfo: SignUpInfo): Observable<Object> {
    const body = JSON.stringify(signUpInfo);
    return this.http.post(this.registerLoginEndpoint, body, this.apiService.getHttpOptions());
  }

  logout(): Observable<Object> {
    return this.http.post(this.logoutEndpoint, null, this.apiService.getHttpOptions());
  }

  isAuthenticated(): Observable<Object> {
    return this.http.post(this.isAuthenticatedEndpoint, null, this.apiService.getHttpOptions());
  }
}