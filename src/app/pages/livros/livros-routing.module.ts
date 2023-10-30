import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosPageComponent } from './livros-page/livros-page.component';

const routes: Routes = [
  {
    path: '', component: LivrosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
