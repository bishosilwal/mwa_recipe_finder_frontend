import { Component } from '@angular/core';
import { ApiNotificationService } from '../service/api-notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  errorMessage: String = '';
  successMessage: String = '';
  _subscriptions: any[] = [];

  constructor(private _apiNotificationService: ApiNotificationService) {
    this._subscriptions[0] = this._apiNotificationService.errorChange.subscribe(
      (notificationService: ApiNotificationService) => {
        this.errorMessage = notificationService.getError();
      }
    );
    this._subscriptions[1] =
      this._apiNotificationService.messageChange.subscribe(
        (notificationService: ApiNotificationService) => {
          this.successMessage = notificationService.getSuccessMessage();
        }
      );
  }

  ngOnDestroy() {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
