import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightType, loginType } from '../models/flight-types';
import { FormMessages } from '../shared/form-messages';
import { GenericValidator } from '../shared/generic-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public type = true;
  private validator: GenericValidator;
  public loginForm: FormGroup = new FormGroup({});
  public loginType: loginType = loginType.Individual;
  public message: { [key: string]: string } = {} as {
    [key: string]: string;
  };
  constructor(private fb: FormBuilder,  private router: Router) {
    this.validator = new GenericValidator(FormMessages);
  }

  ngOnInit(): void {
    this.loginForm = this.loginFormFn();

    this.loginForm.valueChanges.subscribe(
      () => (this.message = this.validator.processMessages(this.loginForm))
    );
  }

  public loginFormFn(): FormGroup {
    return this.fb.group({
      flightType: [this.loginType],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ]
    });
  }

  public loginUser(): void {
    this.router.navigate(['/home']);
  }

  public toggle(dest: string): void {
    switch (dest) {
      case loginType.Individual:
        this.loginForm.patchValue({ loginType: loginType.Individual });
        this.type = true;
        break;
      case loginType.Company:
        this.loginForm.patchValue({ loginType: loginType.Company });
        this.type = false;
        break;
      default:
        break;
    }
  }
}
