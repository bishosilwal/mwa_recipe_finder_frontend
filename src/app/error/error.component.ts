import { Component } from '@angular/core';
import { ApiErrorService } from '../service/api-error.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  errorMessage: String = '';
  _subscription: any;

  constructor(private _apiErrorService: ApiErrorService) {
    this._subscription = this._apiErrorService.errorChange.subscribe(
      (errorService: ApiErrorService) => {
        this.errorMessage = errorService.getError();
      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
