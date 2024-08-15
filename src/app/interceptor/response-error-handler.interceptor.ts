import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { inject } from '@angular/core';
import { ApiErrorService } from '../service/api-error.service';

export const responseErrorHandlerInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const apiErrorService = inject(ApiErrorService);
  return next(req).pipe(
    tap(
      (event) => {},
      (error) => {
        apiErrorService.setRawError(error);
      }
    )
  );
};
