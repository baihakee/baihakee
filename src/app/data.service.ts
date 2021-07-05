import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HomeTab{

  title: string
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  orders: import("c:/Users/A_R_T/Desktop/banana-app/src/app/orders/orders.page").OrdersPage[];

  constructor(private http:HttpClient) {}


  getproductdata(){
    return this.http.get('../../assets/product.json')
  }

  item_menu: Array<HomeTab> = [  
    {title: 'BANANATOP'},
    {title: 'POPPULAR'},
    {title: 'Reviews'},
    {title: 'Seller'}
  ];
};





