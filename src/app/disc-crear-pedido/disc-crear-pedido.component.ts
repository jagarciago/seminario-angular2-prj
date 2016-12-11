import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Pedido } from '../model/Pedido.model';

@Component({
  selector: 'app-disc-crear-pedido',
  templateUrl: './disc-crear-pedido.component.html',
  styleUrls: ['./disc-crear-pedido.component.css']
})
export class DiscCrearPedidoComponent implements OnInit {

    private crearPedido:Pedido;

  constructor(private http:Http) {

    this.crearPedido = new Pedido();
    

   }

  ngOnInit() {
  }

public guardarPedido()
{
  this.http.post(
   "http://www.alex2016.net23.net/seminario/bd/domicilios.php",
    this.crearPedido
  ).subscribe((response)=>{
    let respuesta = response.json();
    if(respuesta.resultado == 1){
      alert("pedido guardado ccon exito");
    }
    else{
      alert("Error al guardar pedido")
    }
  });

  }
}

