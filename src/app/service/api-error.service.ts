import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiErrorService {
  #rawError: Object = {};
  #status: number | null = null;
  #error: String = '';

  errorChange: Subject<any> = new Subject<any>();

  constructor() {}

  setRawError(error: any) {
    this.#rawError = error;
    if (error['error'] && typeof error['error'] == 'string') {
      this.setError(error['error']);
    } else if (error['error'] && typeof error['error'] == 'object') {
      this.setError(error['error']['message']);
    } else if (error['message']) {
      this.setError(error['message']);
    }

    if (error['status']) {
      this.setStatus(error['status']);
    }

    this.errorChange.next(this);
  }

  setError(error: String) {
    this.#error = error;
  }

  setStatus(status: number) {
    this.#status = status;
  }

  getRawError() {
    return this.#rawError;
  }

  getError() {
    return this.#error;
  }

  getStatus() {
    return this.#status;
  }

  clearError() {
    this.#error = '';
  }

  clearStatus() {
    this.#status = null;
  }

  clearRawError() {
    this.#rawError = {};
  }

  clearAll() {
    this.clearError();
    this.clearStatus();
    this.clearRawError();
    this.errorChange.next(this);
  }
}
