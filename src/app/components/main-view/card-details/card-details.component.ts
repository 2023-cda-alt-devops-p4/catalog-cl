import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card';
import { DiagramService } from 'src/app/services/diagram.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent {
  diagramId!: number;
  diagram!: Card;

  constructor(
    private route: ActivatedRoute,
    private diagramService: DiagramService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const diagramId = +idParam;

      this.diagramService.getDiagramById(diagramId).subscribe((diagram) => {
        if (diagram) {
          this.diagram = diagram;
        } else {
          console.log('Diagramme non trouvé');
        }
      });
    } else {
      console.log("ID du diagramme non spécifié dans l'URL");
    }
  }
}
