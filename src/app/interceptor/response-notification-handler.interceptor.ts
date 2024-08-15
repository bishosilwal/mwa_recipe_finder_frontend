import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { ApiNotificationService } from '../service/api-notification.service';

export const responseNotificationhandlerInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const apiNotificationService = inject(ApiNotificationService);
  return next(req).pipe(
    tap(
      (next: any) => {
        if (next.type == HttpEventType.Response) {
          if (next.status == 200 && next.body['message']) {
            apiNotificationService.setMessage(next.body['message']);
          }
        }
      },
      (error) => {
        apiNotificationService.setRawError(error);
      }
    )
  );
};
