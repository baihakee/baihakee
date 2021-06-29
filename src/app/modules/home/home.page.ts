import { Component, OnInit } from '@angular/core';
import { DataService, HomeTab } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{


  appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shopping Cart', url: '/home', icon: 'cart' },
    { title: 'Oder History', url: '/orders', icon: 'list' },
    { title: 'Settings', url: '/setting', icon: 'settings' },
    { title: 'About', url: '', icon: 'reader' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];

  menu = '';
  banana = '';

  data: Array<HomeTab> = [];

  constructor(
    private dataService: DataService
    ){this.data = dataService.item_menu;
      this.menu = this.data[0].title;

}

ngOnInit() {}

}

