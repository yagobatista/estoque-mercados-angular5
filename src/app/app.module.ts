import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { CompraComponent } from './compra/compra.component';
import { ProdutoService } from './produto.service';
import { CompraService } from './compra.service';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdutoService,CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
