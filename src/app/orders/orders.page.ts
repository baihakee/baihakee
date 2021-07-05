import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';


import { OrderbbnPage } from '../orderbbn/orderbbn.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: any = [
    { name: 'Bianca Top', price: 128, discount: 80, description: 'sample data', image:[]},
    { name: 'Banana Top', price: 100, discount: 85, description: 'sample data', image:[]},
    { name: 'Pig Top', price: 180, discount: 90, description: 'sample data', image:[]}
  ];




  constructor() {

  }

  ngOnInit() {


  }








}
