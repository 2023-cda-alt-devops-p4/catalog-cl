import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
 
  @Input() nextPageLabel: string = 'Suivant';
  @Input() previousPageLabel: string = 'Précédent';
  @Input() firstPageLabel: string = 'Première page';
  @Input() lastPageLabel: string = 'Dernière page';
}
