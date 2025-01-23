import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login.component.spec';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        // Store JWT token
        localStorage.setItem('token', response.token);
        alert('Login successful!');
        this.router.navigate(['/app']); // Navigate to dashboard on success
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}
