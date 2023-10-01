import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContrastingModeService {

  private isContrastingMode = false;

  toggleContrastingMode() {
    this.isContrastingMode = !this.isContrastingMode;
  }

  isContrastingModeEnabled() {
    return this.isContrastingMode;
  }
}
