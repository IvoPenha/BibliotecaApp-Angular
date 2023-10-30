import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { livros } from './mock';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/shared/services/livro/livro-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmprestimoModalComponent } from '../emprestimo-modal/emprestimo-modal.component';
import { Livro } from 'src/app/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() livros = [] as Livro[];
  @Input() isLoading = true;



  constructor(
    private livrosService: LivrosService,
    private modalService: NgbModal,
  ) { }



  openEmprestimoModal (livroSelecionado: Livro) {
    const modalRef = this.modalService.open(EmprestimoModalComponent);
    modalRef.componentInstance.onEmpretismo.subscribe((livroId: number) => {
      this.livros.map((livro) => {
        if (livro.id === livroId) {
          livro.disponibilidade = false;
        }
      }
      );
      modalRef.close()
    }
    );
    modalRef.componentInstance.onDevolver.subscribe((livroId: number) => {
      this.livros.map((livro) => {
        if (livro.id === livroId) {
          livro.disponibilidade = true;
        }
      }
      );
      modalRef.close()
    });
    modalRef.componentInstance.livro = livroSelecionado
  }

}
