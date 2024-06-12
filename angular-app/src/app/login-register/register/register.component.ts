import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { User } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}
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

  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.AuthService.registerUser(postData as User).subscribe(
      (response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Registered Successfully',
        });
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      }
    );
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
