import { Component, Input, OnInit } from '@angular/core';
import { OrdersPage } from '../orders/orders.page';

@Component({
  selector: 'app-orderbbn',
  templateUrl: './orderbbn.page.html',
  styleUrls: ['./orderbbn.page.scss'],
})
export class OrderbbnPage implements OnInit {

  @Input() data: any;

  dataorders: any;
  modalController: any;
  constructor() { }

  ngOnInit() {
    this.dataorders = this.data;
    console.log(this.dataorders);
  }


<<<<<<< HEAD
=======

>>>>>>> c00fadc5138472e07d678e805a90295189af1aad

}
