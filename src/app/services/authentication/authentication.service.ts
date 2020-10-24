import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { AuthenticationEndpointService } from './authentication-endpoint.service';
import { catchError, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    protected authenticationEndPointService: AuthenticationEndpointService
  ) { }

  register(signUpInfo: SignUpInfo): Observable<boolean> {
    return this.authenticationEndPointService.register(signUpInfo).pipe(
      map((res: HttpResponse<Object>) =>{
         if (res.status == 200) { return true } else { return false }}),
      catchError(err => of(false))
    );
  }
}
