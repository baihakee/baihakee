import { Component, Input, OnInit } from '@angular/core';


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



}
