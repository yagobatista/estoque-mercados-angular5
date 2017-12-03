import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { Produto } from '../produto';
import { Observable } from 'rxjs/Observable';
import { CompraService } from '../compra.service';
import { ProdutoComponent } from '../produto/produto.component';
@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: Compra[];
  produtos: Produto[];
  currentHeroName: string = "teste";
  searchId:number;
  cadastroVisivel: boolean = false;
  temMensagem:boolean = false;
  mensagem:string ='';
  constructor(private comprasService: CompraService,private produto: ProdutoComponent) { }
  getCompras(): void {
    this.comprasService.getCompras()
      .subscribe(compras => this.compras = compras);
  }
  ngOnInit() {
    this.produto.getprodutos();
    this.produtos = this.produto.produtos;
    this.getCompras();
  }
  addCompra(id: number,quantidade:number,preco:number): void {
    // id do produto
    if (!id||!quantidade || !preco) {
      this.mensagem = "Dados inválidos!";
      return;
    }
    this.comprasService.addCompra({
      quantidade:quantidade,
      preco:preco,
      data: '2326-02-18T02:08:33.312Z',
      produto:id} as Compra)
    .subscribe(compra =>
        this.compras.push(compra)
      );
      this.mensagem = "Compra cadastrada com sucesso!";
  }
  mostrarCadastro(){
    this.produto.getprodutos();
    this.produtos = this.produto.produtos;
    this.cadastroVisivel = true;
  }
  // buscarcompras(){
  //   this.dataService.getHero(this.searchId);
  // }
  removerMensagem(){
    this.mensagem ='';
  }
  clear(){
    this.compras= [];
  }

}
