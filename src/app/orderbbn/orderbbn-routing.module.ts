import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderbbnPage } from './orderbbn.page';

const routes: Routes = [
  {
    path: '',
    component: OrderbbnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderbbnPageRoutingModule {}
