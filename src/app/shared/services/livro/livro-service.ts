import { ApiResponse } from './../../models/base-service';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';
import { Emprestimo, Livro, LivroPost, SearchParams } from '../../models';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LivrosService extends BaseService {
  getAll (search?: SearchParams): Observable<ApiResponse<Livro[]>> {
    const url = `${this.apiUrl}/livros`;
    let params = '?'
    if (search?.titulo) params += `titulo=${search.titulo}&`
    if (search?.autor) params += (`autor=${search.autor}&`)
    if (search?.ano) params += (`ano=${search.ano}`)
    if (!search) params += (`titulo=&autor=&ano=`)
    return this.httpClient.get<ApiResponse<Livro[]>>(url + params);
  }
  getById (id: number): Observable<ApiResponse<Livro>> {
    const url = `${this.apiUrl}/livro/${id}`;
    return this.httpClient.get<ApiResponse<Livro>>(url);
  }

  create (livro: LivroPost): Observable<ApiResponse<Livro>> {
    const url = `${this.apiUrl}/livro`;
    return this.httpClient.post<ApiResponse<Livro>>(url, livro);
  }

  update (id: number, livro: Livro): Observable<ApiResponse<Livro>> {
    const url = `${this.apiUrl}/livros/${id}`;
    return this.httpClient.put<ApiResponse<Livro>>(url, livro);
  }

  delete (id: number): Observable<ApiResponse<Livro>> {
    const url = `${this.apiUrl}/livro/${id}`;
    return this.httpClient.delete<ApiResponse<Livro>>(url);
  }

  emprestar (idLivro: number, idUsuario: number): Observable<ApiResponse<Emprestimo>> {
    const url = `${this.apiUrl}/emprestar-livro/`;
    const body = {
      livroId: idLivro,
      usuarioId: idUsuario
    }
    return this.httpClient.post<ApiResponse<Emprestimo>>(url, body);
  }

  devolver (idLivro: number): Observable<ApiResponse<Emprestimo>> {
    const url = `${this.apiUrl}/devolver-livro`;
    const body = {
      livroId: idLivro
    }
    return this.httpClient.post<ApiResponse<Emprestimo>>(url, body);
  }






}
