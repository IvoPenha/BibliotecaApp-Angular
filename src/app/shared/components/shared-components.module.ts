import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PageHeaderComponent,
    FontAwesomeModule,
    NgbModalModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedComponentsModule { }
