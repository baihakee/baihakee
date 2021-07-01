import { Injectable } from '@angular/core';

export interface HomeTab{

  title: string
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  orders: import("c:/Users/A_R_T/Desktop/banana-app/src/app/orders/orders.page").OrdersPage[];

  constructor() {}


item_menu: Array<HomeTab> =
[{title: 'BANANATOP'},
 {title: 'POPPULAR'},
 {title: 'Reviews'},
 {title: 'Seller'}];
};



