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

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.diagramService.getDiagramData().subscribe(data => {
      this.umlDiagrams = data.umlDiagrams;
      this.meriseDiagrams = data.meriseDiagrams;
    });
  }
  
}
