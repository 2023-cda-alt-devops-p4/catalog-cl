import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-uml-list',
  templateUrl: './uml-list.component.html',
  styleUrls: ['./uml-list.component.css']
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
}
