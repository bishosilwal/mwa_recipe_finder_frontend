import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { UserCredentialService } from '../service/user-credential.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  user: any = {
    email: '',
    password: '',
  };

  error: String = '';
  message: String = '';

  constructor(
    private _userService: UserService,
    private _userCredentialService: UserCredentialService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this._userCredentialService.isLogin()) {
      this._router.navigate(['/']);
    }
  }

  onSubmit() {
    this._userService.login(this.user).subscribe(
      (data) => {
        this._userCredentialService.setToken(data['token']);
        this.message = data['message'];
        this.user = {
          email: '',
          password: '',
        };
        this._router.navigate(['/dishes'], {
          state: { message: data['message'] },
        });
      },
      (error) => {
        this.error = error.error.message;
      }
    );
  }
}
