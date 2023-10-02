import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-uml-list',
  templateUrl: './uml-list.component.html',
  styleUrls: ['./uml-list.component.css'],
})
export class UmlListComponent {
  umlDiagrams: Card[] = [];

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.diagramService.getDiagramData().subscribe((data) => {
      this.umlDiagrams = data.umlDiagrams;
    });
  }

  /* PAGINATION */
  page: number = 1;
  cardsPerPage: number = 5;

  getTotalPages(): number {
    return Math.ceil(this.umlDiagrams.length / this.cardsPerPage);
  }

  getNextPageLabel(): string {
    if (this.page === this.getTotalPages()) {
      return '';
    }
    return '»';
  }

  getPreviousPageLabel(): string {
    if (this.page === 1) {
      return '';
    }
    return '«';
  }

  onPageChange(newPage: number) {
    this.page = newPage;
    this.loadData();
  }
}
