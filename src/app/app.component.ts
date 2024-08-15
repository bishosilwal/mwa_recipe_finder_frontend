import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NavigationStart, Router } from '@angular/router';
import { ApiNotificationService } from './service/api-notification.service';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ErrorpageComponent,
    NotificationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-finder-app-frontend';

  constructor(
    private _router: Router,
    private _apiNotificationService: ApiNotificationService
  ) {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this._apiNotificationService.clearAll();
      }
    });
  }
}
