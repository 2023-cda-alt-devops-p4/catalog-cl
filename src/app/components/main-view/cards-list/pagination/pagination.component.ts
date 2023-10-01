import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContrastingModeService } from 'src/app/services/contrasting-mode.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() nextPageLabel!: string;
  @Input() previousPageLabel!: string;

  constructor(public contrastingModeService: ContrastingModeService) {}
}
