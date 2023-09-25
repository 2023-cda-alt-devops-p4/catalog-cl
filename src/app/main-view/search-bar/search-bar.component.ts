import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchQuery: string = '';

  performSearch(): void {
    console.log('Recherche en cours : ', this.searchQuery);
  }
}
