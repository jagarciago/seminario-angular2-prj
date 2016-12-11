import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Pedido } from './model/Pedido.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

  constructor(private http:Http){

  }

 
}

