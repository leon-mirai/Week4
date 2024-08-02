import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  users = [
    { email: 'pepethefrog@gmail.com', password: 'password1'},
    { email: 'kermitthefrog@gmail.com', password: 'password2'},
    { email: 'sadgethefrog@gmail.com', password: 'password3'}
  ]

  constructor(private router: Router) {}

  onSubmit() {
    const user = this.users.find(u => u.email === this.email && u.password === this.password);
    if (user) {
      // Redirect to account page if login is successful
      this.router.navigate(['/account']);
    } else {
      // Show error message if login fails
      this.errorMessage = 'Invalid username or password';
      alert(this.errorMessage);
    }
  }
}
