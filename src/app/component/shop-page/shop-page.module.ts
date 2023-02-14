import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShopPageComponent } from './shop-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopPageRoutingModule } from './shop-page-routing.module';

const declarations: any[] = [ShopPageComponent];
const imports = [CommonModule, SharedModule,ShopPageRoutingModule];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class ShopPageModule {}
