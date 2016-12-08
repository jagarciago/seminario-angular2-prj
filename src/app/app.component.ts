import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Pedido } from './model/Pedido.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   pedidoList:Array<Pedido> = new Array<Pedido>();

  constructor(private http:Http){

  }

  listarPedido(){
    this.http
    .get("http://www.alex2016.net23.net/Seminario2016/pacientes.php")
    .subscribe((response)=>{
      this.pedidoList = response.json();
      console.log(this.pedidoList);
      let modalPedido = document.getElementById("modal_listado_pedido");
      modalPedido.style.visibility = "visible";
    });            
  }
}

