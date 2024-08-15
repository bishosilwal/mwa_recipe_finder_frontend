import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserCredentialService } from '../service/user-credential.service';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const userCredentialService = inject(UserCredentialService);
  const token = userCredentialService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return next(req);
};
