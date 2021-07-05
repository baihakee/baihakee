import { Injectable } from '@angular/core';

export interface HomeTab {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  item_menu: Array<HomeTab> = [
    { title: 'BANANATOP' },
    { title: 'POPPULAR' },
    { title: 'Reviews' },
    { title: 'Seller' },
  ];
}
