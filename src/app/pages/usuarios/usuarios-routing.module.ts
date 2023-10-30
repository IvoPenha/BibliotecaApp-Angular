import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';

const routes: Routes = [
  {
    path: '', component: UsuariosPageComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
