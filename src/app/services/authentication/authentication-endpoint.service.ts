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

  constructor(private http: HttpClient) { }
  
  register(signUpInfo: SignUpInfo): Observable<Object> {
    return of({status: 200});
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(signUpInfo);
    return this.http.post(this.registerLoginEndpoint, body,{'headers':headers, observe: 'response'});
  }
}
