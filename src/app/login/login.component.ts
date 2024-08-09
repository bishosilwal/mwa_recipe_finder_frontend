import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: any = {
    email: '',
    password: '',
  };

  constructor(private _userService: UserService) {}

  onSubmit() {
    this._userService.login(this.user).subscribe((data) => {
      console.log(data);
    });
  }
}
