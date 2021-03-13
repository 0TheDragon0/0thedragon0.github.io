import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { AuthenticationEndpointService } from './authentication-endpoint.service';
import { catchError, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userLoggedIn = false;

  constructor(
    protected authenticationEndPointService: AuthenticationEndpointService,
    protected router: Router
  ) { }

  register(signUpInfo: SignUpInfo): Observable<boolean> {
    return this.authenticationEndPointService.register(signUpInfo).pipe(
      map((res: HttpResponse<Object>) => {
        if (res.status == 200) {
          this.userLoggedIn = true;
          return true;
        } else {
          this.userLoggedIn = false;
          return false;
        }
      }),
      catchError(err => of(false))
    );
  }

  logout() {
    //To do: Wire up logout end-point in backend and use it here
    this.userLoggedIn = false;
    this.router.navigate(['/', 'login']);
  }
}
