import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() diagram!: Card;

  /* RANDOM BACKGROUND */
  getBackgroundImage(diagramId: number): string {
    const backgroundImages = [
      'assets/backgrounds/eva-bronzini.avif',
      'assets/backgrounds/henry-_-co.avif',
      'assets/backgrounds/la-miko.avif', 
      'assets/backgrounds/madison-inouye.avif',
      'src/assets/backgrounds/sasha-martynov.avif',
    ];
    return backgroundImages[diagramId % 4];
  }
}
