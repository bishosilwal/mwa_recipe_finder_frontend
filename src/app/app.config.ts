import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { httpRequestInterceptor } from './interceptor/http-request.interceptor';
import { responseErrorHandlerInterceptor } from './interceptor/response-error-handler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([
        httpRequestInterceptor,
        responseErrorHandlerInterceptor,
      ])
    ),
  ],
};
