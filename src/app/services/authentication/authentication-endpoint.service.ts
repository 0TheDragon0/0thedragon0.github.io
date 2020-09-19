import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationEndpointService {


  constructor() { }
  register(signUpInfo: SignUpInfo): Observable<boolean> {
    return of(true)
  }
}
