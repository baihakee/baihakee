import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderbbnPageRoutingModule } from './orderbbn-routing.module';

import { OrderbbnPage } from './orderbbn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderbbnPageRoutingModule
  ],
  declarations: [OrderbbnPage]
})
export class OrderbbnPageModule {}
