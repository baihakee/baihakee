import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HomeTab {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  orders: import("src/app/orders/orders.page").OrdersPage[];

  constructor(private http:HttpClient) {}


  getproductdata(){
    return this.http.get('http://localhost:3000/api/services');
  }

  item_menu: Array<HomeTab> = [
    {title: 'BANANATOP'},
    {title: 'POPPULAR'},
    {title: 'Reviews'},
    {title: 'Seller'}
  ];
};





