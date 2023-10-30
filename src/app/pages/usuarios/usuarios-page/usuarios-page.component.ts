import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { usuariosmock } from './mock';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModalComponent } from '../components/usuario-modal/usuario-modal.component';
import { Usuario, UsuariosService } from 'src/app/shared';

@Component({
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.scss']
})
export class UsuariosPageComponent {
  faUsers = faUsers;
  isLoading = true;
  usuarios = [] as Usuario[];
  isModalOpen = false;

  constructor(
    private modalService: NgbModal,
    private usuariosService: UsuariosService
  ) {
    usuariosService.getAll().subscribe((usuarios) => {
      console.log('usuarios', usuarios)
      this.usuarios = usuarios.data
      this.isLoading = false;
    }
    );
  }

  openModal () {
    const modalRef = this.modalService.open(UsuarioModalComponent);
    modalRef.componentInstance.create.subscribe((usuario: Usuario) => {
      this.usuariosService.create(usuario).subscribe((usuario) => {
        this.usuarios.push(usuario.data);
        modalRef.close();
      });
    });
    this.isModalOpen = true;
  }
  // abrirDetalhesModal(id: number) {
  //   const modalRef = this.modalService.open(PokemonDetalheComponent);
  //   modalRef.componentInstance.pokemonId = this.pokemonId = id;
  //   modalRef.componentInstance.updateSucessoEnviado.subscribe((success: boolean) => {
  //     if (success) {
  //       this.buscarPokemons();
  //     }
  //   });
  //   modalRef.componentInstance.removeSucessoEnviado.subscribe((success: boolean) => {
  //     if (success) {
  //       this.buscarPokemons();
  //     }
  //   });
  // }
}
