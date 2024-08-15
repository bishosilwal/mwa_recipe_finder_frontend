import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserCredentialService } from '../service/user-credential.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private _userCredentialService: UserCredentialService,
    private _router: Router
  ) {}

  logout() {
    this._userCredentialService.logout();
    this._router.navigate(['/dishes']);
  }

  isUserLoggedIn() {
    return this._userCredentialService.isLogin();
  }
}
