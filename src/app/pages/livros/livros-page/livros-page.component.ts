import { SearchParams } from './../../../shared/models/livros';
import { LivrosService } from 'src/app/shared/services/livro/livro-service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroModalComponent } from '../components/livros-modal/livro-modal.component';
import { Livro, LivroPost } from 'src/app/shared';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './livros-page.component.html',
  styleUrls: ['./livros-page.component.scss']
})
export class LivrosPageComponent {

  isLoading = true;
  livros = [] as Livro[];

  constructor(
    private modalService: NgbModal,
    private LivrosService: LivrosService
  ) {
    LivrosService.getAll().subscribe((livros) => {
      console.log('livros', livros)
      this.livros = livros.data
      this.isLoading = false;
    }
    );

  }

  filter: FormGroup = new FormGroup({
    searchTitulo: new FormControl('', [Validators.maxLength(100)]),
    searchAutor: new FormControl('', [Validators.maxLength(100)]),
    searchAno: new FormControl('', [Validators.pattern(/^[0-9]+$/)])
  });


  getErrorMessage (field: string): string[] | undefined {
    if (!this.filter.get(field)?.touched)
      return

    const errors = this.filter.get(field)?.errors;
    const messages: string[] = [];

    if (errors?.['pattern']) {
      console.log(errors?.['pattern']);
      messages.push('Caracteres inválidos: insira apenas numeros');
    }
    return messages;
  }


  aplicarFiltro (): void {
    const { searchTitulo, searchAutor, searchAno } = this.filter.value;

    const params = {
      titulo: searchTitulo as string,
      autor: searchAutor as string,
      ano: searchAno as string,
    }
    if (params) {
      console.log('params', params);
      this.LivrosService.getAll(params).subscribe((livros) => {
        console.log('livros', livros)
        this.livros = livros.data
        this.isLoading = false;
      }
      );
    }

  }

  openModal () {
    const modalRef = this.modalService.open(LivroModalComponent);
    modalRef.componentInstance.create.subscribe((livro: LivroPost) => {
      this.LivrosService.create(livro).subscribe((livro) => {
        this.livros.push(livro.data);
        modalRef.close();
      });
      modalRef.close();
    });

  }

}
