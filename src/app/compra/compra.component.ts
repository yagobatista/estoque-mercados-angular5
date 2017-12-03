import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { Produto } from '../produto';
import { Observable } from 'rxjs/Observable';
import { CompraService } from '../compra.service';
import { ProdutoService } from '../produto.service';
@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  compras: Compra[];
  produtos: Produto[];
  cadastroVisivel: boolean = false;
  mensagem:string ='';
  constructor(private comprasService: CompraService,private produtosService: ProdutoService) { }
  getCompras(): void {
    this.comprasService.getCompras()
      .subscribe(compras => this.compras = compras);
  }
  ngOnInit() {
    this.produtosService.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
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
