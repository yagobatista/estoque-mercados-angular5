import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { Observable } from 'rxjs/Observable';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-compra-cadastro',
  templateUrl: './compra-cadastro.component.html',
  styleUrls: ['./compra-cadastro.component.css']
})
export class CompraCadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addProduto(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.produtosService.addProduto(name)
    .subscribe(produto =>
      this.produtos.push(produto)
    );
  }
}
