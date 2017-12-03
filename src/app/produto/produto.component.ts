import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { Observable } from 'rxjs/Observable';
import { ProdutoService } from '../produto.service';
@Component({
  selector: 'produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[];
  currentHeroName: string = "teste";
  searchId:number;
  constructor(private produtosService: ProdutoService) { }
  getprodutos(): void {
    this.produtosService.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }
  ngOnInit() {
    this.getprodutos();
  }
  addProduto(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.produtosService.addProduto(name)
    .subscribe(produto => {
      this.produtos.push(produto);
    });
  }
  // buscarprodutos(){
  //   this.dataService.getHero(this.searchId);
  // }
  clear(){
    this.produtos= [];
  }

}
