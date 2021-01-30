import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../sign-up/sign-up.component.less']
})
export class LoginComponent implements OnInit {

  loading = false;

  constructor(
    private fb: FormBuilder,
    protected authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'), //this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.minLength(8)
      ]
    ]
  });

  getErrorMessage(controlName: string): string {
    if (this.loginForm.controls[controlName].hasError('required')) {
      return 'You must enter a value';
    }
    if (controlName == 'email') {
      return this.loginForm.controls.email.hasError('email') ? 'Not a valid email' : '';
    }

    if (controlName == 'password') {
      return this.loginForm.controls.password.hasError('pattern') ? 'Minimum 8 characters with uppercase and number' : '';
    }
  }

 /** login() {
    this.loading = true;
    let loginInfo = this.loginForm.value;
    this.authenticationService.register(loginInfo).subscribe(
      res => {
        if (res) {
          //To do: Re-direct to content
          this.router.navigate(['/', 'content-home']);
          this.openSnackBar('Login succeeded! :D', 'success-snack-bar');
        } else {
          this.openSnackBar('Something went wrong /:', 'error-snack-bar')
        }
      },
      err => this.openSnackBar('Something went wrong /:', 'error-snack-bar'),
      () => this.loading = false
    );
  }
**/
login(){
  this.router.navigate(['/', 'content-home']);
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
