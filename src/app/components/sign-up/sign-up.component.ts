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
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
       ]
    ]
  });

  getErrorMessage() {
    if (this.signUpForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.signUpForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  signUp() {
    console.log('user clicked sign up button');
  }
}