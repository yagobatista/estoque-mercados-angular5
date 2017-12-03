import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { Observable } from 'rxjs/Observable';
import { CompraService } from '../compra.service';

@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: Compra[];
  currentHeroName: string = "teste";
  searchId:number;
  cadastroVisivel: boolean = false;
  constructor(private comprasService: CompraService) { }
  getCompras(): void {
    this.comprasService.getCompras()
      .subscribe(compras => this.compras = compras);
  }
  ngOnInit() {
    this.getCompras();
  }
  addCompra(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.comprasService.addCompra(name)
      .subscribe(compra =>
        this.compras.push(compra)
      );
  }
  mostrarCadastro(){
    this.cadastroVisivel = true;
  }
  // buscarcompras(){
  //   this.dataService.getHero(this.searchId);
  // }
  clear(){
    this.compras= [];
  }

}
