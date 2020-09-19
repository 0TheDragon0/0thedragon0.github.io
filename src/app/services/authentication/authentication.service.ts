import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { AuthenticationEndpointService } from './authentication-endpoint.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    protected authenticationEndPointService: AuthenticationEndpointService
  ) { }

  register(signUpInfo: SignUpInfo): Observable<boolean> {
    return this.authenticationEndPointService.register(signUpInfo).pipe(
      catchError(err => of(false))
    );
  }
}
