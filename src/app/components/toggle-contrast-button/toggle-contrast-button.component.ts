import { Component } from '@angular/core';
import { ContrastingModeService } from 'src/app/services/contrasting-mode.service';

@Component({
  selector: 'app-toggle-contrast-button',
  templateUrl: './toggle-contrast-button.component.html',
  styleUrls: ['./toggle-contrast-button.component.css']
})
export class ToggleContrastButtonComponent {
  constructor(public contrastingModeService: ContrastingModeService) {}

  toggleContrastingMode() {
    this.contrastingModeService.toggleContrastingMode();
  }
}
