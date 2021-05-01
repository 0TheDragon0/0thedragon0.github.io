import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { API_URL } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationEndpointService {
registerLoginEndpoint = `${API_URL}auth/register-login`;
logoutEndpoint = `${API_URL}auth/logout`;
isAuthenticatedEndpoint = `${API_URL}auth/is-authenticated`;

  constructor(private http: HttpClient) { }
  
  register(signUpInfo: SignUpInfo): Observable<Object> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(signUpInfo);
    return this.http.post(this.registerLoginEndpoint, body, {'headers':headers, observe: 'response', withCredentials: true});
  }

  logout(): Observable<Object> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this.logoutEndpoint, null, {'headers':headers, observe: 'response', withCredentials: true});
  }

  isAuthenticated(): Observable<Object> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this.isAuthenticatedEndpoint, null, {'headers':headers, observe: 'response', withCredentials: true});
  }
}
