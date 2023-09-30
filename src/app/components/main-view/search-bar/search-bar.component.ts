import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() diagrams: Card[] = [];

  filteredDiagrams: Card[] = [];
  searchTerm: string = '';

  constructor(private diagramService: DiagramService, private router: Router) {}

  searchDiagram(): void {
    if (this.searchTerm.trim() !== '') {
      this.diagramService
        .getDiagramByName(this.searchTerm)
        .subscribe((diagram) => {
          if (diagram) {
            console.log('Diagramme trouvé:', diagram);
            this.searchTerm = '';
            this.router.navigate(['/diagram-details', diagram.id]);
          } else {
            console.log(
              'Aucun diagramme correspondant trouvé pour',
              this.searchTerm
            );
            this.searchTerm = '';
            this.showError('Veuillez entrer un terme de recherche valide');
          }
        });
    }
  }

  showError(errorMessage: string): void {
    alert(errorMessage);
  }
}
