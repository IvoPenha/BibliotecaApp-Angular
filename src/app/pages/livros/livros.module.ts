import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosPageComponent } from './livros-page/livros-page.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbDropdown, NgbDropdownConfig, NgbDropdownModule, NgbDropdownToggle, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroModalComponent } from './components/livros-modal/livro-modal.component';
import { EmprestimoModalComponent } from './components/emprestimo-modal/emprestimo-modal.component';


@NgModule({
  declarations: [
    LivrosPageComponent,
    ListComponent,
    ListItemComponent,
    LivroModalComponent,
    EmprestimoModalComponent,
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    NgbModalModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    NgbActiveModal,
    NgbDropdownConfig,
    NgbDropdown
  ]
})
export class LivrosModule { }
