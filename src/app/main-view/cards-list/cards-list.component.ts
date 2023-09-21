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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 1',
      'Source du diagramme 1'
    );
    const card2 = new Card(
      2,
      'Diagramme 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 2',
      'Source du diagramme 2'
    );
    const card3 = new Card(
      3,
      'Diagramme 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 3',
      'Source du diagramme 3'
    );
    const card4 = new Card(
      4,
      'Diagramme 4',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 4',
      'Source du diagramme 4'
    );
    const card5 = new Card(
      5,
      'Diagramme 5',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 5',
      'Source du diagramme 5'
    );
    const card6 = new Card(
      6,
      'Diagramme 6',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVqPT4M7tFJYzra2KXua9kQsRkhxhfIlpSrpOuFRT7D3mirnDkmsHlPTcL21-xGHc10I&usqp=CAU',
      'Description du diagramme 6',
      'Source du diagramme 6'
    );

    this.cards.push(card1, card2, card3, card4, card5, card6);
  }
}
