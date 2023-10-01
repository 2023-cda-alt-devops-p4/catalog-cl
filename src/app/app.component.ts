import { Component } from '@angular/core';
import { ContrastingModeService } from './services/contrasting-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'catalog-cl';

  constructor(public contrastingModeService: ContrastingModeService) {}
}
