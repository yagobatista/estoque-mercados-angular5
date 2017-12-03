import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Produto } from './produto';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProdutoService{

  private produtoUrl = 'https://private-anon-d61f22f220-querotrabalharnawpensar.apiary-proxy.com/api/produtos';  // URL to web api
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getProdutos (): Observable <Produto[]>{
    return this.http.get<Produto[]>(this.produtoUrl);
  }
  getProduto(id: number): Observable <Produto> {
    const url = `${this.produtoUrl}/${id}`;
    return this.http.get<Produto>(url);
  }
  addProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtoUrl, produto, httpOptions);
  }
}
