import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SignUpInfo } from 'src/app/components/sign-up/sign-up.interface';
import { AuthenticationEndpointService } from './authentication-endpoint.service';
import { catchError, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userLoggedIn = false;

  constructor(
    protected authenticationEndPointService: AuthenticationEndpointService,
    protected router: Router,
    private _snackBar: MatSnackBar
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
    this.authenticationEndPointService.logout().subscribe(
      (res: HttpResponse<Object>) => {
        if (res.status == 200) {
          this.userLoggedIn = false;
          this.router.navigate(['/', 'login']);
        } else {
          this.openSnackBar('Something went wrong /:', 'error-snack-bar')
        }
      },
      (error) => this.openSnackBar('Something went wrong /:', 'error-snack-bar')
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.authenticationEndPointService.isAuthenticated().pipe(
      map((res: HttpResponse<Object>) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => of(false)) 
    );
  }

  openSnackBar(message: string, className: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: className
    });
  }
}
