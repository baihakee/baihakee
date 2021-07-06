import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: any = [
    { name: 'Bianca Top', price: 128, discount: 80, description: 'sample data', image: 'assets/img/1.jpg' },
    { name: 'Banana Top', price: 100, discount: 85, description: 'sample data', image: 'assets/img/2.jpg' },
    { name: 'Pig Top', price: 180, discount: 90, description: 'sample data', image: 'assets/img/ku.jpg' }
  ];

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {


  }

  async openDailog(orders) {
    console.log(orders);
    const modal = await this.modalController.create({
      component: OrderbbnPage,
      componentProps: { data: orders },
    });
    return await modal.present();
  }

}
