import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsuarioModalComponent } from './components/usuario-modal/usuario-modal.component';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UsuariosPageComponent,
    DataTableComponent,
    UsuarioModalComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedComponentsModule,
    FontAwesomeModule,
    NgbModalModule
  ],
  providers: [
    NgbActiveModal
  ]
})
export class UsuariosModule { }
