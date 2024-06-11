import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(private fb: FormBuilder) {}
  get fullName() {
    return this.registerForm.controls['fullName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
  // public registerForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   passwordGroup: new FormGroup(
  //     {
  //       password: new FormControl('', [
  //         Validators.required,
  //         Validators.pattern(
  //           '^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[^ws]).{8,}$'
  //         ),
  //       ]),
  //       confirmPassword: new FormControl('', [
  //         Validators.required,
  //         Validators.minLength(6),
  //       ]),
  //     },
  //     [passwordMatchValidator()]
  //   ),
  // });

  public register() {
    console.log(this.registerForm);
  }
  // public hasFormControlError(name: string): boolean {
  //   return (
  //     (this.registerForm.get(name)?.invalid &&
  //       this.registerForm.get(name)?.touched) ||
  //     false
  //   );
  // }
  // public hasPasswordGroupError(name: string): boolean {
  //   return (
  //     (this.registerForm.get('paaswordGroup')?.get(name)?.invalid &&
  //       this.registerForm.get('passwordGroup')?.touched) ||
  //     false
  //   );
  // }
}
