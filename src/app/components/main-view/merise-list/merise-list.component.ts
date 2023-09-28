import { Component } from '@angular/core';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-merise-list',
  templateUrl: './merise-list.component.html',
  styleUrls: ['./merise-list.component.css'],
})
export class MeriseListComponent {
  meriseDiagrams: Card[] = [];

  constructor(private diagramService: DiagramService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.diagramService.getDiagramData().subscribe((data) => {
      this.meriseDiagrams = data.meriseDiagrams;
    });
  }
}
