import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroPost } from 'src/app/shared';

@Component({
  selector: 'app-livro-modal',
  templateUrl: './livro-modal.component.html',
  styleUrls: ['./livro-modal.component.scss']
})
export class LivroModalComponent {

  @Output() create: EventEmitter<LivroPost> = new EventEmitter<LivroPost>();

  constructor(public activeModal: NgbActiveModal) {

  }

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    autor: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    ano: new FormControl(0, [Validators.required, Validators.min(1400), Validators.max(new Date().getFullYear()), Validators.pattern(/^[0-9]+$/)]),
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

    if (errors?.['min']) {
      const min = errors['min'].min;
      messages.push(`Deve ser maior que ${min}`);
    }

    if (errors?.['max']) {
      const max = errors['max'].max;
      messages.push(`Deve ser menor que ${max}`);
    }

    if (errors?.['pattern']) {
      console.log(errors?.['pattern']);
      messages.push('Caracteres inválidos: insira apenas numeros');
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
