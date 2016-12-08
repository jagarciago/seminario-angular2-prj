import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Pedido } from '../model/Pedido.model';

@Component({
  selector: 'app-disc-crear-pedido',
  templateUrl: './disc-crear-pedido.component.html',
  styleUrls: ['./disc-crear-pedido.component.css']
})
export class DiscCrearPedidoComponent implements OnInit {

    crearPedido:Pedido;

  constructor() {
    this.crearPedido = new Pedido();
    this.crearPedido.nombre = "angulamiento";
    
   }

  ngOnInit() {
  }

}
