import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isMenuOpen = false;
  isMobileView = false;

  ngOnInit() {
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
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
