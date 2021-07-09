import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {
  @Input() data: any;

  dataproduct: any;
  liked = false;
  
  constructor( private modalController: ModalController) { }


  ngOnInit() {
    this.dataproduct = this.data;
    console.log(this.dataproduct);
  }
  like() {
    console.log('like')
    this.liked = !this.liked;
  }
  backClicked() {
   this.modalController.dismiss();
  }

}