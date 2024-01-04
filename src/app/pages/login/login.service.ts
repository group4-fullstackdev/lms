import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly ACC_ID_KEY = 'accID';
  private readonly BATCH_ID_KEY = 'batchID';
  private readonly LOG_KEY = 'log';

  get accID(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.ACC_ID_KEY) : null;
  }

  set accID(value: string | null) {
    if (this.isLocalStorageAvailable()) {
      if (value) {
        localStorage.setItem(this.ACC_ID_KEY, value);
      } else {
        localStorage.removeItem(this.ACC_ID_KEY);
      }
    }
  }

  get batchID(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.BATCH_ID_KEY) : null;
  }

  set batchID(value: string | null) {
    if (this.isLocalStorageAvailable()) {
      if (value) {
        localStorage.setItem(this.BATCH_ID_KEY, value);
      } else {
        localStorage.removeItem(this.BATCH_ID_KEY);
      }
    }
  }

  get log(): string | null {
    return this.isLocalStorageAvailable() ? localStorage.getItem(this.LOG_KEY) : null;
  }

  set log(value: string | null) {
    if (this.isLocalStorageAvailable()) {
      if (value) {
        localStorage.setItem(this.LOG_KEY, value);
      } else {
        localStorage.removeItem(this.LOG_KEY);
      }
    }
  }

  clearUserState(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.ACC_ID_KEY);
      localStorage.removeItem(this.BATCH_ID_KEY);
      localStorage.removeItem(this.LOG_KEY);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
