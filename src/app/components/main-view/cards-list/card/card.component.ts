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
      'assets/backgrounds/eva-bronzini.jpeg',
      'assets/backgrounds/henry-_-co.jpeg',
      'assets/backgrounds/la-miko.jpeg', 
      'assets/backgrounds/madison-inouye.jpeg',
      'src/assets/backgrounds/sasha-martynov.jpeg',
    ];
    return backgroundImages[diagramId % 4];
  }
}
