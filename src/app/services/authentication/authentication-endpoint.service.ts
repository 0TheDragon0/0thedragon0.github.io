import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationEndpointService {


  constructor(private http: HttpClient) { }
  register(signUpInfo: SignUpInfo): Observable<Object> {
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(signUpInfo);
    return this.http.post("http://localhost:3000/api/auth/register-login", body,{'headers':headers, observe: 'response'});
  }
}
