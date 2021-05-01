import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    const body = JSON.stringify(signUpInfo);
    return this.http.post(this.registerLoginEndpoint, body, this.getHttpOptions());
  }

  logout(): Observable<Object> {
    return this.http.post(this.logoutEndpoint, null, this.getHttpOptions());
  }

  isAuthenticated(): Observable<Object> {
    return this.http.post(this.isAuthenticatedEndpoint, null, this.getHttpOptions());
  }

  getHttpOptions(params: any = null, contentType = 'application/json', responseType = ''): any {
    const cleanedParams = this.cleanParams(params);
    const httpParams = this.toHttpParams(cleanedParams);

    return {
      headers: new HttpHeaders({
        'Content-type': contentType
      }),
      params: httpParams,
      withCredentials: true,
      observe: 'response',
      responseType: responseType
    };
  }

  private toHttpParams(params: any) {
    if (params) {
      let httpParams = new HttpParams({});

      for (const key of Object.keys(params)) {
        const val = params[key];

        if (val instanceof Array) {
          for (let arrayItem of val) {
            httpParams = httpParams.append(key, arrayItem);
          }
        }
        else {
          httpParams = httpParams.append(key, val);
        }
      }

      return httpParams;
    }

    return null;
  }

  private cleanParams(params: any = null) {
    if (params) {
      const cleanedParams = {};

      for (const key of Object.keys(params)) {
        if (params[key] !== null && params[key] !== undefined) {
          cleanedParams[key] = params[key];
        }
      }

      return cleanedParams;
    }

    return null;
  }
}
