import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user: any = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  error: String = '';
  message: String = '';

  constructor(private _userService: UserService) {}

  onSubmit() {
    if (this.user.password != this.user.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    } else {
      this.error = '';
      this._userService.signup(this.user).subscribe((res) => {
        this.message = res['message'];
        this.user = {
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        };
      });
    }
  }
}
