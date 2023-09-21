import { Component } from '@angular/core';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
  cards: Array<Card> = [];

  constructor() {
    const card1 = new Card(
      1,
      'Diagramme 1',
      'https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/UML-Class-Diagram-Example-Transparent.png',
      'Description du diagramme 1', 'Source du diagramme 1'
    ); 
    const card2 = new Card(
      2,
      'Diagramme 2',
      'https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/UML-Class-Diagram-Example-Transparent.png',
      'Description du diagramme 2', 'Source du diagramme 2'
    ); 
    const card3 = new Card(
      3,
      'Diagramme 3',
      'https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/UML-Class-Diagram-Example-Transparent.png',
      'Description du diagramme 3', 'Source du diagramme 3'
    ); 

    this.cards.push(card1, card2, card3);
  }
}
