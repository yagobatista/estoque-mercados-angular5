import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { Compra } from './compra';
import { Observable } from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CompraService {

  private compraUrl = 'https://private-anon-d61f22f220-querotrabalharnawpensar.apiary-proxy.com/api/compras';  // URL to web api
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getCompras (): Observable <Compra[]>{
    return this.http.get<Compra[]>(this.compraUrl);
  }
  getCompra(id: number): Observable <Compra> {
    const url = `${this.compraUrl}/${id}`;
    return this.http.get<Compra>(url);
  }
  addCompra(nome:string): Observable<Compra> {
  return this.http.post<Compra>(this.compraUrl, nome, httpOptions);
  }

}
