import { Component, OnInit } from '@angular/core';
import { DataService, HomeTab } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{



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

