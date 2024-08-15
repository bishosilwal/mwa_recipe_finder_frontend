import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ErrorComponent } from './error/error.component';
import { NavigationStart, Router } from '@angular/router';
import { ApiErrorService } from './service/api-error.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ErrorpageComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-finder-app-frontend';

  constructor(
    private _router: Router,
    private _apiErrorService: ApiErrorService
  ) {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this._apiErrorService.clearAll();
      }
    });
  }
}
