import { ApiResponse } from './../../models/base-service';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { Emprestimo, Usuario, UsuarioPost } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService extends BaseService {
  getAll (): Observable<ApiResponse<Usuario[]>> {
    const url = `${this.apiUrl}/usuarios`;
    return this.httpClient.get<ApiResponse<Usuario[]>>(url);
  }

  getById (id: number): Observable<ApiResponse<Usuario>> {
    const url = `${this.apiUrl}/usuarios/${id}`;
    return this.httpClient.get<ApiResponse<Usuario>>(url);
  }

  create (usuario: UsuarioPost): Observable<ApiResponse<Usuario>> {
    const url = `${this.apiUrl}/usuarios`;
    return this.httpClient.post<ApiResponse<Usuario>>(url, usuario);
  }

  update (id: number, usuario: Usuario): Observable<ApiResponse<Usuario>> {
    const url = `${this.apiUrl}/usuarios/${id}`;
    return this.httpClient.put<ApiResponse<Usuario>>(url, usuario);
  }

  delete (id: number): Observable<ApiResponse<Usuario>> {
    const url = `${this.apiUrl}/usuario/${id}`;
    return this.httpClient.delete<ApiResponse<Usuario>>(url);
  }
}
