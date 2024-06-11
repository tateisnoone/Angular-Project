import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private fb: FormBuilder) {}

  public hasFormControlError(name: string): boolean {
    return (
      (this.loginForm.get(name)?.invalid &&
        this.loginForm.get(name)?.touched) ||
      false
    );
  }
}
