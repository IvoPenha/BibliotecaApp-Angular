import { UsuariosService } from './../../../../shared/services/usuario/usuario-service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioPost } from 'src/app/shared';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent {

  @Output() create: EventEmitter<UsuarioPost> = new EventEmitter<UsuarioPost>();

  constructor(public activeModal: NgbActiveModal
  ) {

  }

  formulario: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(12)]),
  });

  getErrorMessage (field: string): string[] | undefined {
    if (!this.formulario.get(field)?.touched)
      return


    const errors = this.formulario.get(field)?.errors;
    const messages: string[] = [];

    if (errors?.['required']) {
      messages.push('Campo obrigatório');
    }

    if (errors?.['minlength']) {
      const requiredLength = errors['minlength'].requiredLength;
      messages.push(`Deve ter no mínimo ${requiredLength} caracteres`);
    }

    if (errors?.['maxlength']) {
      const requiredLengthMax = errors['maxlength'].requiredLength;
      messages.push(`Deve ter no máximo ${requiredLengthMax} caracteres`);
    }

    if (errors?.['email']) {
      messages.push('E-mail inválido');
    }

    return messages;
  }

  onSubmit (): void {
    if (this.formulario.valid) {
      this.create.emit(this.formulario.value)
    }
  }

  getErros (controlName: string): string[] {
    const controle = this.formulario.get(controlName);
    const erros: string[] = [];

    if (controle?.errors) {
      for (const chaveErro in controle.errors) {
        switch (chaveErro) {
          case 'required':
            erros.push('Campo obrigatório');
            break;
          case 'minlength':
            const requiredLength = controle.errors['minlength'].requiredLength;
            erros.push(`Deve ter no mínimo ${requiredLength} caracteres`);
            break;
          case 'maxlength':
            const requiredLengthMax = controle.errors['maxlength'].requiredLength;
            erros.push(`Deve ter no máximo ${requiredLengthMax} caracteres`);
            break;
          case 'email':
            erros.push('E-mail inválido');
            break;
        }
      }
    }

    return erros;
  }




}
