import { Component, HostListener } from '@angular/core';
import { ContrastingModeService } from 'src/app/services/contrasting-mode.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isMenuOpen = false;
  isMobileView = false;

  constructor(public contrastingModeService: ContrastingModeService) {}

  ngOnInit() {
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    const windowWidth = window.innerWidth;
    const mobileBreakpoint = 768;
    this.isMobileView = windowWidth < mobileBreakpoint;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
