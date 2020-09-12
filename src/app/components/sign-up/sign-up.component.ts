import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUpForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ]
    ]
  });

  getErrorMessage(controlName: string): string {
    if (this.signUpForm.controls[controlName].hasError('required')) {
      return 'You must enter a value';
    }
    if (controlName == 'email') {
      return this.signUpForm.controls.email.hasError('email') ? 'Not a valid email' : '';
    }

    if (controlName == 'username') {
      return this.signUpForm.controls.username.hasError('minlength') ? 'Minimum length 3 characters' : '';
    }

    if (controlName == 'password') {
      return this.signUpForm.controls.password.hasError('pattern') ? 'Minimum 8 characters with uppercase and number' : '';
    }
  }

  signUp() {
    console.log('user clicked sign up button');
  }

  displayCurrentValue() {
    return JSON.stringify(this.signUpForm.value);
  }
}