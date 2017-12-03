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
  mensagem:string = '';
  constructor(private produtosService: ProdutoService) { }
  getprodutos(): void {
    this.produtosService.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }
  ngOnInit() {
    this.getprodutos();
  }
  addProduto(name: string): void {
    this.mensagem= '';
  name = name.trim();
  if (!name) { this.mensagem="Dados inválidos!";return; }
  this.produtosService.addProduto({nome:name} as Produto)
    .subscribe(produto =>
      this.produtos.push(produto)
    );
    this.mensagem = "Produto cadastrado com sucesso!";
  }
  removerMensagem(){
    this.mensagem ='';
  }
}
