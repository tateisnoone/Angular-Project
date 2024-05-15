import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  public registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^ws]).{8,}$'
          ),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      [passwordMatchValidator()]
    ),
  });

  public register() {
    console.log(this.registerForm);
  }
  public hasFormControlError(name: string): boolean {
    return (
      (this.registerForm.get(name)?.invalid &&
        this.registerForm.get(name)?.touched) ||
      false
    );
  }
  public hasPasswordGroupError(name: string): boolean {
    return (
      (this.registerForm.get('paaswordGroup')?.get(name)?.invalid &&
        this.registerForm.get('passwordGroup')?.touched) ||
      false
    );
  }
}
