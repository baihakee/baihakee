import { Component, OnInit } from '@angular/core';
import { DataService, HomeTab } from 'src/app/data.service';
import { ModalController } from '@ionic/angular';
import { ProductdetailPage } from 'src/app/productdetail/productdetail.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{



  productData: any;
  menu = '';


  data: Array<HomeTab> = [];
  

  constructor(
    private dataService: DataService,
    private modalController: ModalController
  ) {
    this.data = dataService.item_menu;
    this.menu = this.data[0].title;
    
  }


  ngOnInit() {
    this.dataService.getproductdata().subscribe((res:any) => {
      console.log(res);
      this.productData = res.data;
      console.log(this.productData);
    });
  }
  async openDailog(banana) {
    console.log(banana);
    const modal = await this.modalController.create({
      component:ProductdetailPage,
      componentProps: { data: banana },
    });
    return await modal.present();
}
}


