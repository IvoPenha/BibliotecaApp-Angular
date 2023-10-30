import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { faBook, faCalendar, faEllipsisV, faHandPaper } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdown, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/shared';
import { EmprestimoModalComponent } from '../emprestimo-modal/emprestimo-modal.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  faHandPaper = faHandPaper;
  faCalendar = faCalendar;
  faBook = faBook;
  faEllipsisV = faEllipsisV;

  @Input() livro: Livro = {} as Livro;
  @Output() onClick: EventEmitter<Livro> = new EventEmitter<Livro>();
  isDropdownOpen = false;


  constructor(
    private dropdownService: NgbDropdown,
  ) { }

  toggleDropdown (): void {
    this.dropdownService.toggle()
    this.isDropdownOpen = !this.isDropdownOpen;
  }


}
