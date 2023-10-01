import { Component } from '@angular/core';
import { ContrastingModeService } from 'src/app/services/contrasting-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(public contrastingModeService: ContrastingModeService) {}
}
