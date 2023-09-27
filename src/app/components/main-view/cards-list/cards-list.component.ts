import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
  umlDiagrams: Card[] = [];
  meriseDiagrams: Card[] = [];

  /* ALL DIAGRAMS */
  allDiagrams: Card[] = [...this.umlDiagrams, ...this.meriseDiagrams];

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.diagramService.getDiagramData().subscribe((data) => {
      this.umlDiagrams = data.umlDiagrams;
      this.meriseDiagrams = data.meriseDiagrams;
      this.allDiagrams = [...this.umlDiagrams, ...this.meriseDiagrams];
    });
  }

  /* PAGINATION */
  page: number = 1;
  cardsPerPage: number = 8;

  getFirstPageLabel(): string {
    return this.page === 1 ? 'Suivant' : 'Première page';
  }

  getNextPageLabel(): string {
    if (this.page === this.getTotalPages()) {
      return '';
    }
    return 'Suivant';
  }

  getPreviousPageLabel(): string {
    if (this.page === 1) {
      return '';
    }
    return 'Précédent';
  }

  getLastPageLabel(): string {
    const totalPages = this.getTotalPages();
    return this.page === totalPages ? 'Dernière page' : 'Suivant';
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadData();
  }

  getTotalPages(): number {
    return Math.ceil(this.allDiagrams.length / this.cardsPerPage);
  }
}
