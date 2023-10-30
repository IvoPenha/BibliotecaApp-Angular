import { Usuario, UsuariosService, LivrosService } from './../../../../shared/';
import { usuariosmock } from './../../../usuarios/usuarios-page/mock';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/shared';


@Component({
  selector: 'app-emprestimo-modal',
  templateUrl: './emprestimo-modal.component.html',
  styleUrls: ['./emprestimo-modal.component.scss']
})
export class EmprestimoModalComponent {
  usuarios = [] as Usuario[];
  @Input() livro: Livro = {} as Livro;
  @Output() onEmpretismo: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDevolver: EventEmitter<number> = new EventEmitter<number>();
  constructor(
    public activeModal: NgbActiveModal,
    usuariosService: UsuariosService,
    public livrosService: LivrosService
  ) {
    usuariosService.getAll().subscribe((usuarios) => {
      this.usuarios = usuarios.data;
    })
  }

  formulario: FormGroup = new FormGroup({
    usuario: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  onSubmit (): void {
    if (this.livro.disponibilidade === false) {
      this.livrosService.devolver(+this.livro.id).subscribe((livro) => {
        this.onDevolver.emit(livro.data.id);
        this.activeModal.close();
      }
      );
      return;
    }
    if (this.formulario.valid) {
      console.log(this.formulario.value, this.livro);
      console.log(this.formulario.value.usuario, this.livro.id);
      this.livrosService.emprestar(+this.livro.id, +this.formulario.value.usuario).subscribe((livro) => {
        this.onEmpretismo.emit(livro.data.livroId);
        this.activeModal.close();
      })
    }
  }
}
