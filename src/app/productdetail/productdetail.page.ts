import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage {
    @Input() data: any;
  
    dataproduct: any;
    constructor() { }
  
    ngOnInit() {
      this.dataproduct = this.data;
      console.log(this.dataproduct);
    }
  
  
  }