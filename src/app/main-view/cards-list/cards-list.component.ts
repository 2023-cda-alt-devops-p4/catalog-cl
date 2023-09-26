import { Component } from '@angular/core';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent {
  cards: Array<Card> = [];
  diagramService: any;

  constructor() {}

  ngOnInit(): void {}
}
