import { Component, Output, Input, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/shared';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  faTrash = faTrash;
  usuarios: Usuario[] = []
  @Input() data: Usuario[] = [];
  @Input() isLoading = true;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();




}
