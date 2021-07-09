import { CartService } from './cart.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartBanana: any
  
  constructor(private cartService: CartService) { }




  ngOnInit() {
    this.cartService.getBanana().subscribe((res: any) => {
      // console.log(res)
      this.cartBanana = res.data
      console.log(this.cartBanana)
    
      
    })
  }

  cartTotal() {
    let sum = 0;
    for (let car of this.cartBanana) {
     sum = car.price + car.shipping
    }
    
    console.log(sum);
  }
}
