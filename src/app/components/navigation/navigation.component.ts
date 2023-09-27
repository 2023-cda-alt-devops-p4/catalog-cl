import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isMenuOpen = false;
  isMobileView!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const windowWidth = (event.target as Window).innerWidth;
    const mobileBreakpoint = 768;
    this.isMobileView = windowWidth < mobileBreakpoint;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
