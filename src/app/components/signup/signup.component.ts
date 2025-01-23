import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.component.spec';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private signupService: SignupService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.signupService.signup(this.user).subscribe({
      next: (response: any) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/app']); // Redirect to layout on success
      },
      error: (error: any) => {
        console.error('Signup error:', error);
      },
    });
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
